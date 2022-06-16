import { Navbar_inGame } from "../components/NavBar_inGame";
import Footer from "../components/Footer";
import styles from "../styles/playGame.module.css";
import Connect4 from "../components/Connect4";

export default function Connect4_game(){
    return(
        <>
            <Navbar_inGame></Navbar_inGame>
            <Connect4></Connect4>
            <Footer></Footer>
        </>
    )
}