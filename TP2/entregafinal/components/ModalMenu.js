import styles from '../styles/ModalMenu.module.css'
import {FaBars, FaWindowClose, FaTimes} from 'react-icons/fa';


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
        <div className={styles.navbar_transparent}>
          {/* <FaWindowClose className={styles.iconClose} onClick={closeModal}/> */}
          <FaTimes className={styles.iconClose} onClick={closeModal}/>
        </div> 
         
      </div>
    </>
  );

}