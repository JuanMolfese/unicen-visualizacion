import styles from '../styles/ModalMenu.module.css'
import {FaTimes, FaQuestion} from 'react-icons/fa';

export default function Modal_ComoJugar(){

  function openModal(){
    document.querySelector("#close").style.display = 'block';
  }

  function closeModal(){
    document.querySelector("#close").style.display = 'none';
  } 

  return (
    <>
      <FaQuestion className={styles.navbarIcon} onClick={openModal}/>
      <div id="close" className={styles.container_comoJugar}>
        <div className={styles.navbar_transparent}>
            <FaTimes className={styles.iconClose} onClick={closeModal}/>
        </div>
        <div className={styles.container_detalle_como_jugar}>
            <span className={styles.titulo_como_jugar}>Como Jugar al Pacman ?</span>
            <br/><br/>
            <span>Si jugas desde una PC: Usa las flechas del teclado para mover al personaje.</span>
            <br/><br/>
            <span>Si jugas desde un Smartphone: Desliza el dedo sobre la pantalla para mover al personaje</span>
        </div> 
      </div>
    </>
  );

}