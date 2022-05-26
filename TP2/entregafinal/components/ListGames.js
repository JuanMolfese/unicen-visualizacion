import Link from "next/link";
import GameCard from "./GameCard";
import { useState, useEffect } from "react";
import Spinner from "./spinner";

export default function ListGames({games}) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);


  if (loading) {
    return (
      <Spinner></Spinner>
    );
  }

  return (
    <>
      <div>
        <div>
          {games.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </>
  );
}