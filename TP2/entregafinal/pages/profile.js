import styles from "../styles/Profile.module.css";
import Link from "next/link";
import Navbar from "../components/navbar";
import {FiLogOut} from 'react-icons/fi';
import {FaPowerOffv} from 'react-icons/fa';
import { BiDownArrow, BiUpArrow, BiTrash } from "react-icons/bi";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Spinner from "../components/spinner";

export default function Profile({genres, favs}){

    const router = useRouter();
    const { data: session } = useSession()
   
    useEffect(() => {
        if (session === null) {
        router.push("/")
        }
    }, [session])

    if (!session) {
        return (<Spinner></Spinner>);
    }

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

    return (
        <>
            <Navbar genres={genres}></Navbar>
            <div className={styles.container}>
                <div className={styles.logout}>
                   {/* <FiLogOut onClick={()=> signOut('github')} className={styles.iconClose}/>*/}
                    <FaPowerOffv onClick={()=> signOut('github')} className={styles.iconClose}/>    
                </div>
                
                <div className={styles.profile}>
                    <div className={styles.profile_image}>
                        <img width={50} height={50} src={session.user.image} alt="profile"/>
                        <p>{session.user.email}</p>
                    </div>
                    <div className={styles.passwordOption}>
                        <p onClick={mostrarFormulario}>Cambiar contraseña <span><BiDownArrow id="down"/> <BiUpArrow id="up" display="none"/></span> </p>
                        <form id="formulario" className={styles.formPass}>
                            <input type="password" placeholder="Contraseña actual"/>
                            <input type="password" placeholder="Nueva contraseña"/>
                            <input type="password" placeholder="Confirmar contraseña"/>
                            <button>Cambiar</button>
                        </form>
                        <p>Olvide mi contraseña</p>
                    </div>
                    <div className={styles.favoritos}>
                        <h2>Tus Favoritos</h2>
                        <div className={styles.favoritos_content}>
                        {favs.map((fav) => (
                            <div className={styles.favoritos_item}>
                                <p>{fav.title}</p>
                                <BiTrash className={styles.iconTrash}/>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export const getServerSideProps = async () => {
    const resGenres = await fetch('https://unicen-visualizacion-juanmolfese.vercel.app/api/categories');
    const genres = await resGenres.json();
    const fav = await fetch('https://unicen-visualizacion-juanmolfese.vercel.app/api/categories/Accion');
    const favs = await fav.json();
    return {
        props: {
            // props that you want to pass to the page
            genres: genres,
            favs: favs
        },
    };
}
  