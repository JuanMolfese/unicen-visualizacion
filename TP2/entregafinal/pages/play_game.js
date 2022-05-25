import { NavBar_inGame } from "../components/NavBar_inGame";
import Footer from "../components/Footer";

export function PlayGame(){
    return(
        <>
            <NavBar_inGame></NavBar_inGame>
            <img src="/pacman.gif" width="100%" height="500px"></img>                   
            <Footer></Footer>
        </>
    )
}
export default PlayGame;