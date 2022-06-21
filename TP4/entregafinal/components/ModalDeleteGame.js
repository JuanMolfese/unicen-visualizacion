import styles from '../styles/ModalDeleteGame.module.css'
import { BiTrash } from "react-icons/bi";
import { FaInfoCircle } from 'react-icons/fa';

export default function ModalDeleteGame({game}){

  function openModal(){
    document.querySelector("#modalDelete").style.display = 'block';
  }

  function closeModal(){
    document.querySelector("#modalDelete").style.display = 'none';
  } 

  return (
    <>
      <BiTrash className={styles.iconTrash} onClick={openModal}/>
      <div id="modalDelete" className={styles.container}>
        <div className={styles.contentInfo}>
          <FaInfoCircle className={styles.iconInfo}/>
          <p>¿Seguro que desea eliminar el juego <span className={styles.gameTitle}>{game}</span> de favoritos?</p>
          <button className={styles.buttonCancel} onClick={closeModal}>Cancelar</button>
          <button className={styles.buttonDelete} onClick={closeModal}>Eliminar</button>
        </div>
      </div>
    </>
  );

}