import Image from 'next/image';
import styles from '../styles/GameCard.module.css';
import Link from 'next/link';

export default function GameCard({ game }){
    
    return(
        <section className={styles.card}>
            {/* <Link href="/games/[id]" as={`/games/${game.id}`} passHref> */}
                <div>
                    <a href={`/games/${game.id}`}><img src={game.thumbnail} className={styles.img} width="150" height="100"/>
                    <h4 className={styles.gameTitle}>{game.title}</h4></a>
                </div>
            {/* </Link> */}
            
        </section>
    )
}