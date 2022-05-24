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
      <p>No se encontraron juegos para la categoria: {category} </p>
    )
  }

  return (
    <>
      <Navbar genres={genres}></Navbar>
      <div>
        <ListGames games={games}></ListGames>
      </div>
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