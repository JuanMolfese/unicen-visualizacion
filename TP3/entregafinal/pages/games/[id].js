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
import NextJsCarousel from '../../components/Carousel';
import Like from '../../components/Like';
import Share_button from "../../components/Share_button";
import BtnsLikes from "../../components/BtnsLikes";
import ButtonPlay from "../../components/ButtonPlay";
import Navbar from "../../components/navbar";

export default function Page({game, genres}) {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const ok = [];
    fetch(`https://unicen-visualizacion3.vercel.app/api/categories/${game.genre}`, {
        method: 'GET',
        headers: new Headers({ 'Content-type': 'application/json'}),
        mode: 'no-cors',
      })
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
      <div className={styles.noExistGameTitle}>
        <Check msj='Ese juego no existe' type='info'></Check>
      </div>
    )
  }

  return (
    <div className={styles.content}>
      <Navbar genres={genres}/>
      <div className={styles.contentGame}>
        <p className={styles.path}>Categoria:  
          <Link href={`/genre/${game.genre}`} as={`/genre/${game.genre}`}>
            <a>{game.genre}</a>
          </Link>
        </p>
        {/* <IoReturnDownBackOutline className={styles.iconBack} onClick={() => Router.back()}></IoReturnDownBackOutline> */}
        <div className={styles.headerGame}>
          <h2 className={styles.titleGame}>{game.title}</h2>
          <div className={styles.buttonsGame}>
            <Share_button game={game}></Share_button>
            <Like></Like>
            {/* <BtnsLikes/> */}
          </div>
        </div>
        <iframe className={styles.imgGame} width="100%" height="250" src={`${game.video_url}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p className={styles.descriptionGame}>{game.short_description}</p>
        
        <a href="/play_game"><button className={styles.btnPlay}>¡ Jugar ahora !</button></a>
          {/* <a className={styles.buttonPlay}><ButtonPlay/></a> */}
        
      </div>
      <div className={styles.carousel}>
        <NextJsCarousel></NextJsCarousel>
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
  const resCategories = await fetch(`https://unicen-visualizacion3.vercel.app/api/categories`);
  const categories = await resCategories.json();
  const res = await fetch(`https://unicen-visualizacion3.vercel.app/api/games/${context.params.id}`)
  const game = await res.json();
  return {
    props: {
      title: 'Games',
      // props that you want to pass to the page
      game: game,
      genres: categories,
    },
  };
}
