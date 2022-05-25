import Fondo_animado from "../components/fondo_animado";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import styles from '../styles/Register.module.css'
import Logo from "../components/Logo";

export default function register(){
  return (
    <>
      <Fondo_animado/>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <Logo className={styles.logo}/>
          <Link href="/" className={styles.btnClose}>
            <FaTimes className={styles.iconClose}/>
          </Link>
        </div>
        
        <div className={styles.contentTitle}>
          <h2>Registrate</h2>
          <p className={styles.subtitle}>Crea tu lista de juegos preferidos registrandote</p>
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
           {/* ver : para animacion felicitaciones por el registrado
           https://codepen.io/l2zeo/pen/ZEBLepW

              Luego dentro de la pantalla o modal de felicitaciones el boton 
              A Jugar ! redireccionaria a al home pero con user logueado
              Significa poner avatar del usuario (con opcion de log off)
              Ese boton habilita nuevo menu de edicion del usuario.
              Y NO debe aparecer la lista de favoritos ya q es un nuevo usuario */}
          
          <div className={styles.contentSubmit}>
            <button type="submit" className={styles.btnSubmit}>Registrarme</button>
          </div>
          
          <div className={styles.contentTitle}>
            <h2>Ya estas registrado ?</h2>
          </div>
          <Link href="/login">
            <div className={styles.contentSubmit}>
              <a><button type="submit" className={styles.btnInicioSesion}>Iniciar Sesion</button></a>
            </div>
          </Link>

        </form>
      </div>
    </>
  )
}