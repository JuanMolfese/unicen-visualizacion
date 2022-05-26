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

export default function Home({games, genres}) {

/*   const [user, setUser]=useState(null)

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
      <ListGames games={games}></ListGames>
      <Footer></Footer>
    </>
  )  
}


export const getServerSideProps = async () => {
  
  const res = await fetch('http://localhost:3000/api/games');
  const games = await res.json();
  const resGenres = await fetch('http://localhost:3000/api/categories');
  const genres = await resGenres.json();
  return {
    props: {
      title: 'Games',
      // props that you want to pass to the page
      games: games,
      genres: genres,
    },
  };
}
