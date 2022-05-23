import styles from '../styles/ModalMenu.module.css'
import {FaBars, FaWindowClose} from 'react-icons/fa';


export default function ModalMenu(){

  function openModal(){
    document.querySelector("#hamburger").style.display = 'block';
  }

  function closeModal(){
    document.querySelector("#hamburger").style.display = 'none';
  }

  return (
    <>
      <FaBars className={styles.navbarIcon} onClick={openModal}/>
      <div id="hamburger" className={styles.container}>
        <FaWindowClose className={styles.iconClose} onClick={closeModal}/>
      </div>
    </>
  );

}