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
            <span className={styles.titulo_como_jugar}>Como Jugar al Forest Runner ?</span>
            <br/><br/>
            <span className={styles.textoComoJugar}> El objetivo del juego es juntar 10 monedas sin morir en el intento, ya que los monstruos del bosque estaran al acecho. Utiliza la barra espaciadora para saltar. En cualquier momento del juego puedes presionar la tecla escape / esc para salir.              
            </span>
            
        </div> 
      </div>
    </>
  );

}