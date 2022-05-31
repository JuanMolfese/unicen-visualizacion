import styles from '../styles/ModalDeleteGame.module.css'

export default function ModalDeleteGame(){

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
        <button className={styles.buttonCancel} onClick={closeModal}>Cancelar</button>
        <button className={styles.buttonDelete} onClick={closeModal}>Eliminar</button>
      </div>
    </>
  );

}