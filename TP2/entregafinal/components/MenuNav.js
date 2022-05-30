import Link from "next/link"
import styles from "../styles/MenuNav.module.css"
import {FaSearch} from 'react-icons/fa';

export default function MenuNav({genres}){

  function searchGames(){
    let search = document.querySelector("#search").value;
    if (search) 
    window.location.replace(`/games?search=${search}`);
  }

  function viewInput(){
    console.log(document.querySelector("#search").style.width);
    document.querySelector("#search").style.width = 0;
  }

  return (
    <>
      <ul className={styles.listGenres}>
        {genres.genres ? 
          genres.genres.map(genre => (
            <li key={genre.id} className={styles.itemGenre}>
              <Link href={`/genre/${genre.name}`} as={`/genre/${genre.name}`}>
                <a>{genre.name}</a>
              </Link>
            </li>
          ))
          : null
        }  
      </ul>
      <div className={styles.searchContainer}>
        <div className={styles.search}>
          <input id="search" autoComplete="off" placeholder="Buscar por nombre o categoria" type="text" maxLength={15} className={styles.inputSearch}></input>
          <FaSearch className={styles.iconSearch} onClick={searchGames}></FaSearch>
        </div>
      </div>
    </>
  )
}