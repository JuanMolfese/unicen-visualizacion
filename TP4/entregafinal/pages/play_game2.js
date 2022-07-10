import { Navbar_inGame } from "../components/NavBar_inGame";
import Footer from "../components/Footer";
import React, { useState, useEffect } from 'react';
import Background from "../components/ForestRunner/Background";

let fin = false;
let points = 0;

export default function Play_Game2(){

    const [gameOver, setGameOver] = useState(false); 
    const [personaje, setPersonaje] = useState(null);
    const pointsToWin = 10;
    let salto;
    
    
    function jump(){
        char.classList.remove(`char${personaje}_jump`); 
        char.classList.add(`char${personaje}_run`); 
        salto = false;       
      /*   if (fin == true && points == pointsToWin){
            char.classList.add(`char${personaje}_jump`);
            char.classList.remove(`char${personaje}_run`);
            char.style.animationIterationCount = 'infinite';
        } */
    }

    function mostrar_cartel_loose(){
        cartel_loose.style.visibility='visible';
    }

    function mostrar_cartel_win(){
        cartel_win.style.visibility='visible';
    }

    function mostrar_botones(){
        boton_home.style.visibility='visible';
        boton_reload.style.visibility='visible';
    }

    function mostrar_char_win(){
        char.classList.add(`char${personaje}_win`);
        char.classList.remove(`char${personaje}_run`);
        char.classList.remove(`char${personaje}_death`);
        char.classList.remove(`char${personaje}_jump`);
    }

    function detener_fondo(){
        layer1.style.animationPlayState='paused';
        layer2.style.animationPlayState='paused';
        layer3.style.animationPlayState='paused';
        layer4.style.animationPlayState='paused';
        layer5.style.animationPlayState='paused';
        layer6.style.animationPlayState='paused';
    }

    function detener_musica(){
        let audioGame = document.getElementById("audioGame");      
        audioGame.pause();
    }

    function coinSound(){
        const audioCoin = document.getElementById("audioCoin");      
        audioCoin.play();
    }

    function sonido_muerte(){
        let audioDeath = document.getElementById("audioDeath");
        audioDeath.play();
    }

    useEffect(() => {
        const char = document.getElementById("char"); 
        const mob1 = document.getElementById("mob1");
        const coin = document.getElementById("coin");
   
        //EVENTOS DE TECLA --  por ej BARRA ESPACIADORA PARA SALTAR// 
   
        if (personaje != null && fin == false) {
            jump();
            window.addEventListener("keydown", function (event) {     
            
                if (event.key == " " && fin == false) {
                    salto = true;
                    char.classList.add(`char${personaje}_jump`);
                    char.classList.remove(`char${personaje}_run`);
                    char.classList.remove(`char${personaje}_death`);
                    this.setTimeout(jump, 1300);
                }
                else if (event.key === "Escape"){
                    //window.location.href = " ";
                    location.reload();
                }
            }); 
            char.classList.add(`char${personaje}_run`);
            mob1.style.left = '800px';
            coin.style.left = '800px';
        }
    });

    function handleChange(event){
        setPersonaje(event.target.value);
    }

    if (personaje != null) {
        let interval = setInterval(() => {
            if (fin == false) {
                mob1.style.left = (parseInt(mob1.style.left) - 10) + 'px';
                coin.style.left = (parseInt(coin.style.left) - 12) + 'px';
            } else clearInterval(interval);
            let char_right = char.offsetLeft + char.clientWidth;
            //let char_bottom = char.clientHeight + char.offsetTop;
            let mob_right = mob1.offsetLeft + mob1.clientWidth;
            let coin_bottom = coin.clientHeight + coin.offsetTop;
            //if ( (mob1.offsetLeft == char_right && !salto) || (salto && (char_bottom >= mob1.offsetTop && char.offsetLeft < mob_right) ) ) { 
            if ((mob1.offsetLeft <= char_right && salto == false && mob_right > char.offsetLeft + 20) ){
                char.classList.remove(`char${personaje}_run`);
                char.classList.add(`char${personaje}_death`);
                setGameOver(true);
                fin = true;
                setTimeout(sonido_muerte,100);
                setTimeout(detener_fondo, 1200);
                setTimeout(detener_musica, 1200);
                setTimeout(mostrar_cartel_loose,1200); 
                setTimeout(mostrar_botones, 1200); 
                clearInterval(interval);
                
            } 
            if (coin.offsetLeft <= char_right && coin.offsetLeft >= char.offsetLeft && salto == true && coin_bottom > char.offsetTop){
                coin.style.left = '800px';
                points ++;
                coinSound();
                document.getElementById("coins_counter").innerHTML = `${points}`;
                if (points == pointsToWin) {
                    fin=true;
                    setTimeout(mostrar_cartel_win,800);
                    setTimeout(mostrar_char_win,1000);
                    setTimeout(detener_fondo, 800);
                    setTimeout(mostrar_botones, 800);
                    clearInterval(interval);                    
                    mob1.style.left = '800px';
                }
                
            }
            if (parseInt(mob1.style.left) + mob1.clientWidth <= 0) {
                //mob1.style.left = (parseInt(Math.random() * 100) + 800) + 'px';
                mob1.style.left = '800px';
            }  
            if (parseInt(coin.style.left) + coin.clientWidth <= 0) {
                coin.style.left = '800px';
            }
        }, 50);

    }

return(
    <>
        <Navbar_inGame></Navbar_inGame>
        {(personaje == null) ? 
        <>            
            <div className="contentSelect">
                <input id="pers1" type="radio" name="selectPers" onChange={handleChange} value="1"/>
                <label for="pers1" className="itemPers"><img src="/ForestRunner/char/char.png"></img></label>
                <input id="pers2" type="radio" name="selectPers" onChange={handleChange} value="2"></input> 
                <label for="pers2" className="itemPers"><img src="/ForestRunner/char/char2.png"></img></label>
                <audio id="select_char" src="/ForestRunner/music/select_char.mp3" type="audio/mp3" autoPlay></audio>
            </div> 
        </>
        :
        <div className="container">
            
            <Background gameOver={gameOver}></Background>
            {/* <a href=""><div id="go_back"></div></a> */}
            <div id="coins_counter">0</div>            
            <div id="char" className="char"></div>            
            <div id="mob1" className="mob1_run"></div>         
            <div id="coin" className="coin"></div>
            <div id="cartel_win"></div>
            <div id="cartel_loose"></div>
            <a href="/" id="boton_home"></a>
            <a href="" id="boton_reload"></a>
            <div className="char1_win"></div>
            <div className="char2_win"></div>   
            <audio id="audioGame" src="/ForestRunner/music/BosquesProfundos.mp3" type="audio/mp3" autoPlay></audio>
            <audio id="audioCoin" src="/ForestRunner/music/coin.mp3" type="audio/mp3"></audio>
            <audio id="audioDeath" src="/ForestRunner/music/deathSound.mp3" type="audio/mp3"></audio>
        </div>
        }
        <Footer></Footer>
<style jsx>{`

   /*  .titleSelect {
        text-align: center;
    } */

    .contentSelect {
        background: url('/ForestRunner/carteles/main_screen.jpg');
        width: 800px;
        height: 600px;
        display: flex;        
        justify-content: center;
        position: relative;
        overflow: hidden;  
        margin-left: auto;
        margin-right: auto;
        left: 0;        
        right: 0;       
        top: 20px;
        bottom: 0;          
    }

    .contentSelect input {
        display: none;
    }

    .itemPers {
        width: 100px;
        height: 100px;
        margin: auto;
    }

    input[type="radio"]:checked + label{
        cursor: pointer;
        transform: scale(1.3);
        filter: brightness(150%);
    }

    .itemPers img{
        width: 100px;
        height: 100px;        
    }

    .itemPers:hover {
        cursor: pointer;
        transform: scale(1.3);
        transition-duration: 1s;
        filter: brightness(150%);
    }

    .container{
        width: 800px;
        height: 600px;
        position: relative;
        left: 0;
        top: 0;    
        overflow: hidden;  
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        margin-top: auto;
        margin-bottom: auto;
        top: 20px;
        bottom: 0;  
    }

    .char {
        width: 120px;
        height: 120px;
        z-index: 2;        
        position: absolute;
        left: 100px;
        top: 435px;
    }

    .char1_run{
        background: url('/ForestRunner/char/char_run.png');
        animation: char_run 0.7s steps(8) infinite;
        MozAnimation: char_run 1s steps(8) infinite;
        WebkitAnimation: char_run 1s  steps(8) infinite;
    }

    .char2_run{
        background: url('/ForestRunner/char/char2_run.png');
        animation: char_run 0.7s steps(8) infinite;
        MozAnimation: char_run 1s steps(8) infinite;
        WebkitAnimation: char_run 1s  steps(8) infinite;
    }

    @keyframes char_run{
        0%{background-position: 0px;}
        100%{background-position: -960px;}   
    }

    
    .char1_death{       
        background: url('/ForestRunner/char/char_death.png');
        animation: char_death 1.3s steps(11) 1 normal forwards;    
        MozAnimation: char_death 1.3s steps(11) 1 forwards;
        WebkitAnimation: char_death 1.3s steps(11) 1 forwards;
    }

    .char2_death{       
        background: url('/ForestRunner/char/char2_death.png');
        animation: char_death 1.3s steps(11) 1 normal forwards;    
        MozAnimation: char_death 1.3s steps(11) 1 forwards;
        WebkitAnimation: char_death 1.3s steps(11) 1 forwards;
    }
    
    @keyframes char_death{
        0%{background-position: 0px; opacity: 1;}
        99%{opacity: .8;}
        100%{background-position: -1320px;opacity: 0;}   
    }

    .char1_jump{ 
        background: url('/ForestRunner/char/char_jump.png');
        animation: char_jump 1.3s steps(12) 1;
        MozAnimation: char_jump 1.3s steps(12) 1;
        WebkitAnimation: char_jump 1.3s steps(12) 1;  
    }

    .char2_jump{ 
        background: url('/ForestRunner/char/char2_jump.png');
        animation: char_jump 1.3s steps(12) 1;
        MozAnimation: char_jump 1.3s steps(12) 1;
        WebkitAnimation: char_jump 1.3s steps(12) 1;  
    }

    @keyframes char_jump{
        0%{background-position: 0px; top: 390px;} 
        50%{top: 150px;}
        100%{background-position: -1440px; top: 390px;}    
    }
    
    .char1_win{
        background: url('/ForestRunner/char/char1_win.png');
        animation: char_win 1.3s steps(12) infinite;
        MozAnimation: char_win 1.3s steps(12) infinite;
        WebkitAnimation: char_win 1.3s steps(12) infinite; 
    }

    .char2_win{
        background: url('/ForestRunner/char/char2_win.png');
        animation: char_win 1.3s steps(12) infinite;
        MozAnimation: char_win 1.3s steps(12) infinite;
        WebkitAnimation: char_win 1.3s steps(12) infinite; 
    }

    @keyframes char_win{
        0%{background-position: 0px; top: 435px;} 
        100%{background-position: -1440px; top: 435px;}
    }

    .mob1_run{
        width: 120px;
        height: 120px;
        background: url('/ForestRunner/char/mob.png');
        animation: mob1_run 0.5s steps(5) infinite;
        MozAnimation: mob1_run 0.5s steps(5) infinite;
        WebkitAnimation: mob1_run 0.5s steps(5) infinite;
        z-index: 2;        
        position: absolute;
        top: 430px;
        left: 0;
    }   
    
    {/* #mob1_despl_X{
        animation: mob1_desplace 3.5s linear infinite;  
    } */}

    .coin{
        width: 50px;
        height: 50px;
        background: url('/ForestRunner/coins/coin_50.png');
        animation: coin2 0.8s steps(6) infinite;  
        MozAnimation: coin2 0.8s steps(6) infinite;
        WebkitAnimation: coin2 0.8s steps(6) infinite;
        z-index: 2;    
        position: absolute;        
        top: 240px;
    }
    
    #coin_despl_X{
        animation: coin1 4.5s linear infinite;  
    }
    
    #cartel_loose{
        width: 340px;
        height: 247px;
        background: url('/ForestRunner/carteles/cartel_loose.png');
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        margin-top: auto;
        margin-bottom: auto;
        top: 0;
        bottom: 0;
        z-index: 11;
        visibility: hidden;
    }
    
    #cartel_win{
        width: 340px;
        height: 247px;
        background: url('/ForestRunner/carteles/cartel_win_2.png');
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        margin-top: auto;
        margin-bottom: auto;
        top: 0;
        bottom: 0;
        z-index: 11;
        visibility: hidden;
    }
    
    
    #coins_counter{    
        width: 159px;
        height: 85px;
        background: url('/ForestRunner/carteles/coin_count.png');
        position: absolute;    
        z-index: 12;
        left: 620px;
        top: 20px;
        color: #fff; 
        font-size: 35px;   
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        justify-content : center;
        align-items: center;              
    }  

    #boton_home{
        width: 57px;
        height: 62px;
        background: url('/ForestRunner/carteles/home.png');
        position: absolute;
        left: 320px;
        top: 280px;
        z-index: 15;
        visibility: hidden;
    }

    #boton_reload{
        width: 56px;
        height: 61px;
        background: url('/ForestRunner/carteles/btn_re_play.png');
        position: absolute;
        left: 420px;
        top: 280px;
        z-index: 15;
        visibility: hidden;
    }

    #go_back{    
        width: 71px;
        height: 78px;
        background: url('/ForestRunner/carteles/btn_back.png');
        position: absolute;    
        z-index: 12;
        left: 20px;
        top: 20px;
    }

    @keyframes mob1_run{
        0%{background-position: 0px;}
        100%{background-position: -600px;}
    }

    @keyframes mob1_desplace{
        0%{transform: translateX(1100px);}
        100%{transform: translateX(-80px);}
    }
    
    @keyframes coin2{
        0%{background-position: 0px;}
        100%{background-position: -300px;}
    }

    @keyframes coin1{
        0%{transform: translateX(1700px);}
        100%{transform: translateX(-80px);}
    }
    `}

</style>

    </>

)

}