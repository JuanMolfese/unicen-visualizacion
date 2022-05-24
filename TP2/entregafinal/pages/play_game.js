import Navbar_play from "../components/navbar_play";
import Footer from "../components/footer";

export function PlayGame(){
    return(
        <>
            <Navbar_play></Navbar_play>
            <img src="/pacman.gif"></img>                   
            <Footer></Footer>
        </>
    )
}
export default PlayGame;