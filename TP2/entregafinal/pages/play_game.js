import { Navbar_inGame } from "../components/Navbar_inGame";
import Footer from "../components/Footer";

export function PlayGame(){
    return(
        <>
            <Navbar_inGame></Navbar_inGame>
            <img src="/pacman.gif" width="100%" height="500px"></img>                   
            <Footer></Footer>
        </>
    )
}
export default PlayGame;