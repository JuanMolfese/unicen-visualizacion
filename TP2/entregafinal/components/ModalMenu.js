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

  function searchGames(){
    let search = document.querySelector("#search").value;
    window.location.replace(`/games?search=${search}`);
  }

  return (
    <>
      <FaBars className={styles.navbarIcon} onClick={openModal}/>
      <div id="hamburger" className={styles.container}>
        <div className={styles.navbar_transparent}>
          <Logo className={styles.logo}/>
          <FaTimes className={styles.iconClose} onClick={closeModal}/>
        </div> 
        <div className={styles.searchContainer}>
          <div className={styles.search}>
            <input id="search" autoComplete="off" placeholder="Buscar ..." type="text" maxLength={15} className={styles.inputSearch}></input>
            <FaSearch className={styles.iconSearch} onClick={searchGames}></FaSearch>
          </div>
          <span className={styles.search_aclaration}> Busca por nombre o categoria</span>
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