import Image from 'next/image';
import styles from '../styles/GameCard.module.css';
import Link from 'next/link';

export default function GameCard({ game }){
    
    return(
        <section className={styles.card}>
            <Link href="/games/[id]" as={`/games/${game.id}`}>
                <a><img src={game.thumbnail} width="200" height="200"/></a>
            </Link>
            <div>
                <h4>{game.title}</h4>                
            </div>
        </section>
    )
}