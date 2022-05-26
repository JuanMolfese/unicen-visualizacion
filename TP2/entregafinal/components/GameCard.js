import Image from 'next/image';
import styles from '../styles/GameCard.module.css';

/* Donde se consuma esta, importar: 
import styles from '../styles/GameCard.module.css';
o definir en el css q se use ahi como vamos a acomodar cada card generada por el .map

luego pondria: 

    <div className="gameContainer">
        {games.map((game) => (
            <GameCard game={game} key={game.id}/>
    </div>
    ))}
*/

export default function GameCard({ game }){
    return(
        <section className={styles.card}>
            <Link href="../pages/game/{game.id}">
                <a><Image src={`/${game.thumbnail}`} width="200" height="200"/></a>
            </Link>
            <div>
                <h4>{game.title}</h4>                
            </div>
        </section>
    )
}