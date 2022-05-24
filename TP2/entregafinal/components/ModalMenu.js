import styles from '../styles/ModalMenu.module.css'
import {FaBars, FaSearch, FaTimes} from 'react-icons/fa';
import Logo from './Logo';


export default function ModalMenu({genres}){

  function openModal(){
    document.querySelector("#hamburger").style.display = 'block';
  }

  function closeModal(){
    document.querySelector("#hamburger").style.display = 'none';
  } 

  genres.genres.forEach(genre => {
    console.log(genre);
  });

  return (
    <>
      <FaBars className={styles.navbarIcon} onClick={openModal}/>
      <div id="hamburger" className={styles.container}>
        <div className={styles.navbar_transparent}>
          <Logo className={styles.logo}/>
          <FaTimes className={styles.iconClose} onClick={closeModal}/>
        </div> 
        <div className={styles.search}>
          <input placeholder="Buscar ..." type="text" className={styles.inputSearch}></input>
          <FaSearch className={styles.iconSearch}></FaSearch>
        </div>
        <div className={styles.categories}>
          <a href="/">Todos los juegos</a>
        </div>
        <h4>Categorias</h4>
        <div>
        {genres.genres.forEach(genre => {
          <a>{genre}</a>
          })
        }
        </div>
      </div>
    </>
  );

}