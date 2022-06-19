import styles from "../styles/Profile.module.css";
import Link from "next/link";
import Navbar from "../components/navbar";
import {FiLogOut} from 'react-icons/fi';
/* import {FaPowerOffv} from 'react-icons/fa'; */
import { BiDownArrow, BiUpArrow, BiTrash } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa"
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Spinner from "../components/spinner";
import ModalDeleteGame from "../components/ModalDeleteGame";
import Image from 'next/image'

export default function Profile({genres, favs}){

    const [message, setMessage] = useState('');
    const router = useRouter();
    const { data: session } = useSession()
    /*
    useEffect(() => {
        if (session === null) {
        router.push("/")
        }
    }, [session])

    if (!session) {
        return (<Spinner></Spinner>);
    }  
    */
    function mostrarFormulario(){
        let display = document.getElementById("formulario").style.display;
        if (display == 'flex'){
            document.getElementById("formulario").style.display = 'none';
            document.getElementById("down").style.display = 'block';
            document.getElementById("up").style.display = 'none'    
        } else {
            document.getElementById("formulario").style.display = 'flex';
            document.getElementById("up").style.display = 'block';
            document.getElementById("down").style.display = 'none';
        }
    }  

    function openAvisoOlvi(){
        setMessage(`Se te envio un correo electronico a ${session.user.email} para reestablecer tu contraseña`);
        //setMessage(`Se te envio un correo electronico a [...] para reestablecer tu contraseña`);
        document.querySelector("#aviso").style.display = 'block';
    }

    function openAviso(e){
        e.preventDefault()
        setMessage('La contraseña ha sido cambiada correctamente');
        document.querySelector("#aviso").style.display = 'block';
        mostrarFormulario();
    }
    
    function closeAviso(){
        document.querySelector("#aviso").style.display = 'none';
    }


    return (
        <>
            <Navbar genres={genres}></Navbar>
            <div className={styles.container}>
                <div className={styles.logout}>
                    <FiLogOut onClick={()=> signOut('github')} className={styles.iconClose}/>
                </div>
                
                <div className={styles.profile}>
                    <div className={styles.profile_image}>
                        {/* 
                        <img width={40} height={40} src={session.user.image} alt="profile"/>
                        <p className={styles.profile_email}>{session.user.email}</p>
                         */}
                    </div>
                    <div className={styles.passwordOption}>
                        <p onClick={mostrarFormulario}>Cambiar contraseña <span><BiDownArrow id="down"/> <BiUpArrow id="up" display="none"/></span> </p>
                        <form id="formulario" className={styles.formPass}>
                            <input type="password" placeholder="Contraseña actual" maxLength={20}/>
                            <input type="password" placeholder="Nueva contraseña" autoComplete="off" maxLength={20}/>
                            <input type="password" placeholder="Confirmar contraseña" autoComplete="off" maxLength={20}/>
                            <button onClick={openAviso}>Cambiar</button>
                        </form>
                        <a onClick={openAvisoOlvi}><p>Olvide mi contraseña</p></a>
                    </div>
                    <div className={styles.favoritos}>
                        <h2>Tus Favoritos</h2>
                        <div className={styles.favoritos_content}>
                        {favs.map((fav) => (
                            <div className={styles.favoritos_item}>
                                <div className={styles.fav_game}>
                                    <Image src={fav.thumbnail} width={40} height={40} className={styles.img_fav}/>
                                    <p>{fav.title}</p>
                                </div>
                                {/* <BiTrash className={styles.iconTrash}/> */}
                                <ModalDeleteGame game={fav.title}></ModalDeleteGame>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
            <div id="aviso" className={styles.aviso}>
                <div className={styles.contentAviso}>
                    <FaCheckCircle className={styles.iconCheck}/>
                    <p>{message}</p>
                    <button className={styles.btnGenial} onClick={closeAviso}>OK</button>
                </div>
            </div>
        </>
    )
}

export const getServerSideProps = async () => {
    const resGenres = await fetch('https://unicen-visualizacion3.vercel.app/api/categories');
    const genres = await resGenres.json();
    const fav = await fetch('https://unicen-visualizacion3.vercel.app/api/categories/Accion');
    const favs = await fav.json();
    return {
        props: {
            // props that you want to pass to the page
            genres: genres,
            favs: favs
        },
    };
}
  