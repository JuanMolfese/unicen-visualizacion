import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/Footer'
import ListGames from '../components/ListGames'
import {getSession, useSession} from 'next-auth/react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Advertising from '../components/advertising'


export default function Home({games, genres, promotion, favs}) {

  const { data: session } = useSession();

  return (
    <>
      <Navbar genres={genres}></Navbar>
      <Link href="/games/[id]" as={`/games/${promotion.id}`}>
        <section className={styles.card}>
          <h6 className={styles.juegoPromocionado}>Juego promocionado</h6>
            <img src={promotion.thumbnail} width="100%vh" height="auto"/>
          <h4 className={styles.gameTitle}>{promotion.title}</h4>                
        </section>
      </Link>
      {(session) ?
        <div className={styles.listFav}>
          <h3 className={styles.groupGame}>Tus Favoritos</h3>
          <ListGames games={favs}></ListGames>
        </div>
        : null
      }
      <h3 className={styles.groupGame}>Todos los juegos</h3>
      <ListGames games={games}></ListGames>
      <Advertising></Advertising>
      <Footer></Footer>
    </>
  )  
}


export const getServerSideProps = async () => {
  
  const res = await fetch('https://unicen-visualizacion.vercel.app/api/games');
  const games = await res.json();
  const resGenres = await fetch('https://unicen-visualizacion.vercel.app/api/categories');
  const genres = await resGenres.json();
  const fav = await fetch('https://unicen-visualizacion.vercel.app/api/categories/Accion');
  const favs = await fav.json();
  return {
    props: {
      title: 'Games',
      // props that you want to pass to the page
      games: games,
      genres: genres,
      favs: favs,
      promotion: games[18],
    },
  };
}
