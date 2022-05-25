import Fondo_3D from "../components/Fondo_3D";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import styles from '../styles/Register.module.css'
import Logo from "../components/Logo";

export default function Login(){
    return(
    <>
        <Fondo_3D></Fondo_3D>
        
        <div className={styles.container}>
            <div className={styles.header}>
            <Logo className={styles.logo}/>
            <Link href="/" className={styles.btnClose}>
                <FaTimes className={styles.iconClose}/>
            </Link>
            </div>
            
            <div className={styles.contentTitle}>
                <h2>Inicia Sesion</h2>
                <p className={styles.subtitle}>Disfruta de los mejores juegos!</p>
            </div>
            <form action="/" className={styles.formRegister}>
                <label for="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.inputEmail}
                    placeholder="Ingrese su correo electronico"
                />
                <label for="pswrd">Password:</label>
                <input
                    type="password"
                    id="pswrd"
                    name="pswrd"
                    pattern="[a-z]{0,9}"
                    className={styles.inputPass}
                    placeholder="Ingrese la contraseña deseada"
                    title="La contraseña puede ser números (0 to 9) o letras (a to z)."
                />


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

            </form>
        </div>
    </>
    )
} 
