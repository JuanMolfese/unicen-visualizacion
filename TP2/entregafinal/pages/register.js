import Fondo_animado from "../components/fondo_animado";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import styles from '../styles/Register.module.css'
import Logo from "../components/Logo";
import Fondo_3D from "../components/Fondo_3D";

export default function register(){
  return (
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
          <h2 className={styles.titulo}>Registrate</h2>
          <p className={styles.subtitle}>Crea tu lista de juegos preferidos</p>
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
            maxLength={15}
          />
           <div className={styles.infoPass}>
              <span>Contraseña de al menos 8 numeros y letras.</span>
           </div>    

           {/* ver : para animacion felicitaciones por el registrado
           https://codepen.io/l2zeo/pen/ZEBLepW

              Luego dentro de la pantalla o modal de felicitaciones el boton 
              A Jugar ! redireccionaria a al home pero con user logueado
              Significa poner avatar del usuario (con opcion de log off)
              Ese boton habilita nuevo menu de edicion del usuario.
              Y NO debe aparecer la lista de favoritos ya q es un nuevo usuario */}
          
          <div className={styles.contentSubmit}>
            <Link href="/register_acepted">
              <button type="submit" className={styles.btnSubmit}>Registrarme</button>
            </Link>
          </div>
        </form>
          
        <div className={styles.contentTitle}>
          <h4 className={styles.yaRegistrado}>Ya estas registrado ?</h4>
          <div className={styles.contentSubmit}>
            <Link href="/login">
              <a className={styles.linkInicioSesion}>Iniciar Sesion</a>
            </Link>
          </div>
        </div>

      </div>
    </>
  )
}