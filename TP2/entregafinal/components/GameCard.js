import Image from 'next/image';
import styles from '../styles/GameCard.module.css';
import Link from 'next/link';

export default function GameCard({ game }){
    
    return(
        <section className={styles.card}>
            <Link href="/games/[id]" as={`/games/${game.id}`}>
                <a><img src={game.thumbnail} className={styles.img} width="150" height="100"/></a>
            </Link>
            <h4 className={styles.gameTitle}>{game.title}</h4>                
            
        </section>
    )
}