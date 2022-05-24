import Fondo_animado from "../components/fondo_animado";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import styles from '../styles/Register.module.css'
import Logo from "../components/logo";

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
          <div className={styles.contentSubmit}>
            <button type="submit" className={styles.btnSubmit}>Registrarme</button>
          </div>
        </form>
      </div>
    </>
  )
}