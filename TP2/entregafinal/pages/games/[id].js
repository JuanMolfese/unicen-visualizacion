import { useEffect, useState } from "react";
import Logo from "../../components/Logo";
import Spinner from "../../components/spinner";
import styles from "../../styles/Game.module.css"
import {IoReturnDownBackOutline} from 'react-icons/io5'
import Router from 'next/router'
import Link from "next/link";
import { FaHeart, FaShareAlt } from "react-icons/fa";

export default function Page({game}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  if (loading) {
    return (
      <Spinner></Spinner>
    );
  }
   
  if (game.status == 0){
    return (
      <p>No se encontro el juego</p>
    );
  } 

  return (
    <div class="contentGame">
      <div class={styles.header}>
        <IoReturnDownBackOutline className={styles.iconBack} onClick={() => Router.back()}></IoReturnDownBackOutline>
        <Link href="/">
          <a className={styles.logo}><Logo></Logo></a>
        </Link>
      </div>
      <div className={styles.contentGame}>
        <p className={styles.path}>Categoria:  
          <Link href="/">
            <a>{game.genre}</a>
          </Link>
        </p>
        <div className={styles.headerGame}>
          <h2 className={styles.titleGame}>{game.title}</h2>
          <div className={styles.buttonsGame}>
            <FaShareAlt className={styles.iconShare}/>
            <FaHeart className={styles.iconLike}/>
          </div>
        </div>
        <img src={game.thumbnail} width="100%"/>
        <p className={styles.descriptionGame}>{game.description}</p>
        <Link href="/play_game">
          <a><button className={styles.btnPlay}>¡ Jugar !</button></a>
        </Link>      
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  /* const res = await fetch(`https://www.freetogame.com/api/game?id=${context.params.id}`); */
  const res = await fetch(`http://localhost:3000/api/games/${context.params.id}`)
  const game = await res.json();
  return {
    props: {
      title: 'Games',
      // props that you want to pass to the page
      game: game
    },
  };
}
