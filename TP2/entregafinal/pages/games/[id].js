import { useEffect, useState } from "react";
import Logo from "../../components/Logo";
import Spinner from "../../components/spinner";
import styles from "../../styles/Game.module.css"
import {IoReturnDownBackOutline} from 'react-icons/io5'
import Router from 'next/router'
import Link from "next/link";
import { FaHeart, FaShareAlt } from "react-icons/fa";
import Check from "../../components/check";
import ListGames from "../../components/ListGames";

export default function Page({game}) {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const ok = [] 
    fetch(`http://localhost:3000/api/categories/${game.genre}`)
      .then(res => res.json())
      .then(json =>
      // Guarda posts en estado
      /* setGames(json.map(c => (
        c.id != game.id ? c : ''))
      )), */
        json.map((c) => {
          if (c.id != game.id){
            ok.push(c);
          }
        })
      ),
      setGames(ok);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <Spinner></Spinner>
    );
  }
   
  if (!game){
    return (
      <Check msj='Ese juego no existe' type='info'></Check>
    )
  }

  return (
    <div className={styles.contentGame}>
      <div className={styles.header}>
        <IoReturnDownBackOutline className={styles.iconBack} onClick={() => Router.back()}></IoReturnDownBackOutline>
        <Link href="/">
          <a className={styles.logo}><Logo></Logo></a>
        </Link>
      </div>
      <div className={styles.contentGame}>
        <p className={styles.path}>Categoria:  
          <Link href={`/genre/${game.genre}`} as={`/genre/${game.genre}`}>
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
        <iframe className={styles.imgGame} width="100%" height="315" src={`${game.video_url}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p className={styles.descriptionGame}>{game.short_description}</p>
        <Link href="/play_game">
          <a><button className={styles.btnPlay}>¡ Jugar !</button></a>
        </Link>      
      </div>
      {games ?
          <div>
            <p className={styles.similarGamesTitle}>Juegos similares</p>
            <ListGames games={games}></ListGames>
          </div>
      : null}
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
