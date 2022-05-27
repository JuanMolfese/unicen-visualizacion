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

export default function Games({games, genres, search}) {

/*   const [user, setUser]=useState(null)
     const router = useRouter()
  
      if(status === 'loading'){
        return <p>Cargando</p>  //ACA PUEDE IR EL SPINNER QUE ARMASTE
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
      <div>
        <h3 className={styles.listGameForCategory}>Resultados de la busqueda: {search}</h3>
        {games.length ? <ListGames games={games}></ListGames> : <p> No hay juegos que coincidan con tu busqueda </p>}
        
      </div>
      <Footer></Footer>
    </>
  )  
}


export const getServerSideProps = async (context) => {
  const res = await fetch(`https://unicen-visualizacion-juanmolfese.vercel.app/api/games?search=${context.query.search}`)
  const games = await res.json();
  const resGenres = await fetch('https://unicen-visualizacion-juanmolfese.vercel.app/api/categories');
  const genres = await resGenres.json();
  return {
    props: {
      title: 'Games',
      // props that you want to pass to the page
      games: games,
      genres: genres,
      search: context.query.search
    },
  };
}
