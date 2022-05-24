import Check from "../../components/check";
import Footer from "../../components/footer";
import ListGames from "../../components/ListGames";
import Navbar from "../../components/navbar";

export default function Genre({games, category, all}){

  const genres = [];
  all.forEach(g => {
    if (!genres.includes(g.genre)){
      genres.push(g.genre);
    }
  });

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
  const res = await fetch(`https://www.freetogame.com/api/games?category=${context.params.genre}`);
  const games = await res.json();
  const resAll = await fetch('https://www.freetogame.com/api/games');
  const all = await resAll.json();
  return {
    props: {
      title: 'Games',
      // props that you want to pass to the page
      games: games,
      all: all,
      category: context.params.genre
    },
  };
}