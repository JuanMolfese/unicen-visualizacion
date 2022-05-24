import Navbar_play from "../components/navbar_play";
import Footer from "../components/footer";

export function PlayGame(){
    return(
        <>
            <Navbar_play></Navbar_play>

            <iframe width="100%" height="400px" src="https://www.addictinggames.com/embed/html5-games/23032" scrolling="no"></iframe>
            
            <Footer></Footer>
        </>
    )
}
export default PlayGame;