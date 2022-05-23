import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'
import ListGames from '../components/ListGames'

export default function Home({games}) {

  return (
    <>
      <Navbar></Navbar>
      <ListGames games={games}></ListGames>
      <Footer></Footer>
    </>
  )

  
}

export const getServerSideProps = async () => {
  
  const res = await fetch('https://www.freetogame.com/api/games');
  const games = await res.json();
  return {
    props: {
      title: 'Games',
      // props that you want to pass to the page
      games: games,
    },
  };
}
