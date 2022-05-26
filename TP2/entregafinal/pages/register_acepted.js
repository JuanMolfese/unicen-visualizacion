import Fondo_animado from "../components/fondo_animado";
import Link from "next/link";
import styles from '../styles/Register.module.css'
import Logo from "../components/Logo";
import Fondo_3D from "../components/Fondo_3D";

export default function Register_acepted(){
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
        </div>
        <div className={styles.contentTitle}>
          <h1>Felicitaciones !</h1>
          <h4>Ya te haz registrado.</h4>
        </div>
        <div className={styles.contentSubmit}>
          <Link href="/">
            <a><button type="submit" className={styles.btnInicioSesion}>A Jugar</button></a>
          </Link>
        </div>          
      </div>
    </>
  )
}