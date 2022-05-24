import { useEffect, useState } from "react";
import Spinner from "../../components/spinner";

export default function Page({game}) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  if (loading) {
    return (
      <Spinner></Spinner>
    );
  }
   
  if (game.status == 0){
    return (
      <p>No se encontro el juego</p>
    );
  }


  return (
    <div>
      <h2>{game.title}</h2>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://www.freetogame.com/api/game?id=${context.params.id}`);
  const game = await res.json();
  return {
    props: {
      title: 'Games',
      // props that you want to pass to the page
      game: game,
    },
  };
}
