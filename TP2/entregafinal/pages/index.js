import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/Footer'
import ListGames from '../components/ListGames'
import {getSession} from 'next-auth/react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Advertising from '../components/advertising'


export default function Home({games, genres, promotion}) {

/*   const [user, setUser]=useState(null)
     const router = useRouter()
  
      if(status === 'loading'){
        return <p>Cargando</p>  
      }
      if(status === 'unauthenticated'){
        router.push('/login')
      }

      useEffect(()=>{
        (async() => {
          const session = await getSession()
          setUser(session.user)
        })();
      },[]
    ) */



  return (
    <>
      <Navbar genres={genres}></Navbar>
      <Link href="/games/[id]" as={`/games/${promotion.id}`}>
        <section className={styles.card}>
          <h6>Juego promocionado</h6>
          <img src={promotion.thumbnail} width="500px" height="auto"/>
          <h4 className={styles.gameTitle}>{promotion.title}</h4>                
        </section>
      </Link>
      <ListGames games={games}></ListGames>
      <Advertising></Advertising>
      <Footer></Footer>
    </>
  )  
}


export const getServerSideProps = async () => {
  
  const res = await fetch('https://unicen-visualizacion-juanmolfese.vercel.app/api/games');
  const games = await res.json();
  const resGenres = await fetch('https://unicen-visualizacion-juanmolfese.vercel.app/api/categories');
  const genres = await resGenres.json();
  return {
    props: {
      title: 'Games',
      // props that you want to pass to the page
      games: games,
      genres: genres,
      promotion: games[18],
    },
  };
}
