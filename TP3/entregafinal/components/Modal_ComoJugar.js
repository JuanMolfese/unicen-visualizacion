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
            <span className={styles.titulo_como_jugar}>Como Jugar al 4 en linea ?</span>
            <br/><br/>
            <span className={styles.textoComoJugar}> El objetivo del juego es conectar cuatro fichas de un mismo color de cualquiera de las tres formas siguientes:
              Verticalmente, Horizontalmente y Diagonalmente.
              Puedes jugar 4 en linea en diferentes variaciones. La cantidad de piezas necesarias para ganar puede variar. Algunas versiones requieren un tablero más grande, lo que permite juagr con cinco o incluso seis piezas.
              Existe la posibilidad de que no todos los juegos terminen con una victoria para uno de los jugadores. Si se llenan todas las celdas del tablero y no estan la cantidad de fichas necesarias para ganar, se anuncia el empate.
              El tiempo total de juego es de 10 minutos.              
            </span>
            
        </div> 
      </div>
    </>
  );

}