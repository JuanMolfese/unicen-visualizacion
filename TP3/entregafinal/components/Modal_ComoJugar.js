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
            <span>Quizás una de las principales razones de la popularidad del juego es su simplicidad. Si bien no hay reglas complicadas que seguir, existen estrategias para aumentar sus posibilidades de ganar.
              Una vez que cada jugador elige un color, generalmente rojo o amarillo, uno de ellos comienza colocando un disco en cualquier lugar de la cuadrícula vertical de siete columnas y seis filas, que se usa para jugar. Cuando un jugador coloca un disco, la única forma de detenerlo es con otro disco.
              El objetivo del juego es conectar cuatro discos de un mismo color de cualquiera de las tres formas siguientes:
              Verticalmente, Horizontalmente y Diagonalmente.
              Puedes jugar Connect 4 en diferentes variaciones. La cantidad de piezas necesarias para conectarse para ganar puede variar. Algunas versiones requieren una rejilla más grande, lo que permite la conexión de cinco o incluso seis piezas.
              Existe la posibilidad de que no todos los juegos terminen con una victoria para uno de los jugadores. Si se llenan todas las celdas de la cuadrícula y no hay cuatro discos conectados, se anuncia un sorteo sin ganadores.
            </span>
            
        </div> 
      </div>
    </>
  );

}