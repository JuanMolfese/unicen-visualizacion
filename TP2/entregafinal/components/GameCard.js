import Image from 'next/image';

/* lo llamaria
    <div>
        {games.map((game) => (
            <GameCard game={game} key={game.id}/>
    </div>
    ))}
     */
export default function GameCard({ game }){
    return(
        <section>
            <Link href="../pages/game/{game.id}">
                <a><Image src={game.thumbnail} width="200" height="200"/></a>
            </Link>
            <div>
                <h2>{game.title}</h2>
                <p></p>
            </div>
        </section>


    )
}