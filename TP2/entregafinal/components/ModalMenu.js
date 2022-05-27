import styles from '../styles/ModalMenu.module.css'
import {FaBars, FaSearch, FaTimes} from 'react-icons/fa';
import Logo from './Logo';
import Link from 'next/link';

export default function ModalMenu({genres}){

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
          <Logo className={styles.logo}/>
          <FaTimes className={styles.iconClose} onClick={closeModal}/>
        </div> 
        <div className={styles.search}>
          <input placeholder="disparos" type="text" className={styles.inputSearch}></input>
          <Link href={`/genre/Disparos`}>
            <FaSearch className={styles.iconSearch} onClick={closeModal}></FaSearch>
          </Link>
        </div>
        <div className={styles.allGames}>
          <a href="/">Todos los juegos</a>
        </div>
        <div className={styles.genres}>
          <div className={styles.categories}>
            <span>Categorias</span>
          </div>

          <ul>
          {genres.genres.length ? 
            genres.genres.map(genre => (
              <li key={genre.id}>
                <Link href={`/genre/${genre.name}`} as={`/genre/${genre.name}`}>
                  <a onClick={closeModal}>{genre.name}</a>
                </Link>
              </li>
            ))
            : null}
          
          </ul>
        </div>
      </div>
    </>
  );

}