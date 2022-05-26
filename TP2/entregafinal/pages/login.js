import Fondo_3D from "../components/Fondo_3D";
import Fondo_animado from "../components/fondo_animado";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import styles from '../styles/Register.module.css';
import Logo from "../components/Logo";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login(){
    
    const { data: session } = useSession()
    
    return(
    <>
        <div className={styles.container}>
            <div className={styles.capaBlur}>
                <Fondo_animado/>
            </div>
            <div className={styles.tres_d}>
                <Fondo_3D/>
            </div>
            <div className={styles.header}>
            <Logo className={styles.logo}/>
            <Link href="/" className={styles.btnClose}>
                <FaTimes className={styles.iconClose}/>
            </Link>
            </div>
            
            <div className={styles.contentTitle}>
                <h2 className={styles.titulo}>Inicia Sesion</h2>
                <p className={styles.subtitle}>Disfruta de los mejores juegos!</p>
            </div>
            <form action="/" className={styles.formRegister}>
                <label for="email" className={styles.labels}>Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.inputEmail}
                    placeholder="Ingrese su correo electronico"
                />
                <label for="pswrd" className={styles.labels}>Password:</label>
                <input
                    type="password"
                    id="pswrd"
                    name="pswrd"
                    pattern="[a-z]{0,9}"
                    className={styles.inputPass}
                    placeholder="Ingrese la contraseña deseada"
                    title="La contraseña puede ser números (0 to 9) o letras (a to z)."
                />
                <div className={styles.infoPass}>
                    <span>Contraseña de al menos 8 numeros y letras.</span>
                </div>    

                {/* TODO Aca vamos al home pero con user logueado
                Significa poner avatar del usuario (con opcion de log off)
                Ese boton habilita nuevo menu de edicion del usuario.
                Y debe aparecer la lista de favoritos (supongamos que es un usuario ya 
                creado por lo que posee un par de favoritos) */}

                <Link href="/"> 
                    <div className={styles.contentSubmit}>
                        <button type="submit" className={styles.btnInicioSesion}>Iniciar Sesion</button>
                    </div>
                </Link>



                <Link href="/api/auth/signin/github">
                    <div className={styles.contentSubmit}>
                        <button type="submit" className={styles.btnInicioGit}>Inicio con GitHub</button>
                    </div>
                </Link>
                
                
                {/* <Link href="/api/auth/signout">
                    <div className={styles.contentSubmit}>
                        <button type="submit" className={styles.btnInicioGit}>Cerrar Sesion GitHub</button>
                    </div>
                </Link> */}

                 {/*export default function Component() {
                    const { data: session } = useSession()
                    if (session) {
                        return (
                        <>
                            Logueado como {session.user.email} <br />
                            <button onClick={() => signOut()}>Desloguear</button>
                        </>
                        )
                    }
                    return (
                        <>
                        No estas logueado <br />
                        <button onClick={() => signIn()}>Loguear</button>
                        </>
                    )
                    } */}  

            </form>
        </div>
    </>
    )
} 
