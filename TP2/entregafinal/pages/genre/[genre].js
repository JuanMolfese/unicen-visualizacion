import Check from "../../components/check";
import Footer from "../../components/Footer";
import ListGames from "../../components/ListGames";
import Navbar from "../../components/navbar";

export default function Genre({games, category, genres}){

  if (!games.length){
    return (
      <Check msj='No existen juegos para el genero' category={category} genres={genres} type='info'></Check>
    )
  }

  return (
    <>
      <Navbar genres={genres}></Navbar>
      <div>
        <h2>Juegos con categoria: {category}</h2>
        <ListGames games={games}></ListGames>
      </div>
      <Footer></Footer>
    </>
  );
}


export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/categories/${context.params.genre}`);
  const games = await res.json();
  const resGenres = await fetch('http://localhost:3000/api/categories');
  const genres = await resGenres.json();
  return {
    props: {
      title: 'Games',
      // props that you want to pass to the page
      games: games,
      genres: genres,
      category: context.params.genre
    },
  };
}