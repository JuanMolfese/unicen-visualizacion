import Fondo_3D from "../components/Fondo_3D";
import Fondo_animado from "../components/fondo_animado";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import styles from '../styles/Register.module.css';
import Logo from "../components/Logo";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Login(){
    
    const { data: session } = useSession()
    const router = useRouter();

    useEffect(() => {
        if (session) {
        router.push("/")
        }
    }, [session])

    function iniciarSesion(e){
        e.preventDefault();
        signIn('github', {callbackUrl:'https://unicen-visualizacion-juanmolfese.vercel.app'})
      }
  
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
                    autoComplete="off"
                    maxLength={28}
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
                    autoComplete="off"
                    maxLength={20}
                />
                <div className={styles.infoPass}>
                    <span>Contraseña de al menos 8 numeros y letras.</span>
                </div>    

                {/* TODO Aca vamos al home pero con user logueado
                Significa poner avatar del usuario (con opcion de log off)
                Ese boton habilita nuevo menu de edicion del usuario.
                Y debe aparecer la lista de favoritos (supongamos que es un usuario ya 
                creado por lo que posee un par de favoritos) */}

                {/* <Link href="/"> 
                    <div className={styles.contentSubmit}>
                        <button type="submit" className={styles.btnInicioSesion}>Iniciar Sesion</button>
                    </div>
                </Link> */}

{/* 
                {session && <a href="#" onClick={handleSignout} className="btn-signin">Sign out</a>  } 
                {!session && <a href="#" onClick={handleSignin}  className="btn-signin">Sign in</a>  }
 */}            
                {(session) ? (
                        (  
                        <div className={styles.contentSubmit}>
                            <button onClick={() => signOut('github')} type="submit" className={styles.btnInicioSesion}>Cerrar Sesion</button>
                        </div>
                        )
                        ) : (                        
                        (    
                        <div className={styles.contentSubmit}>
                            <button onClick={iniciarSesion} type="submit" className={styles.btnInicioSesion}>Iniciar Sesion</button>
                        </div>
                        ))
                }            

            </form>
        </div>
    </>
    )
} 
