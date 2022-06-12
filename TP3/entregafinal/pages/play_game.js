import { Navbar_inGame } from "../components/NavBar_inGame";
import Footer from "../components/Footer";
import styles from "../styles/playGame.module.css";
import Connect4 from "../components/Connect4";

export function PlayGame(){
    return(
        <>
            <Navbar_inGame></Navbar_inGame>
            
            <div className={styles.playGameContainer}>
                <img src="./backgrounds/3.jpg" className={styles.background}></img>
            </div>
            
            <Connect4></Connect4> {/*  JUEGO */}

            {/* <Footer></Footer> */}
        </>
    )
}
export default PlayGame;