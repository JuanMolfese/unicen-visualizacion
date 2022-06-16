import Ficha from './Ficha.js';
import styles from "../styles/playGame.module.css";

export default function Connect4() { 
    return (
        <>
        <div className={styles.canvas}>
            <canvas id="canvas" width="800" height="400"></canvas>
        </div>
        </>
    )
}