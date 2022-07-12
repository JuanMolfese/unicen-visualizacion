import { Navbar_inGame } from "../components/NavBar_inGame";
import Footer from "../components/Footer";
import React, { useState, useEffect } from 'react';
import Background from "../components/ForestRunner/Background";

let fin = false;
let points = 0;

export default function Play_Game2(){

    const [gameOver, setGameOver] = useState(false); 
    const [personaje, setPersonaje] = useState(null);
    const pointsToWin = 5;
    const randomMin = 800;
    const randomMax = 1700;
    const distance = 350;
    let salto;
    let mob1_pos;
    let mob2_pos;
    

    /* Funcion que es llamada luego de saltar y retorna a su estado RUN al personaje */
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

    /* Al perder la vida muestra un cartel que te permite volver a jugar o salir al menu del juego */
    function mostrar_cartel_loose(){
        cartel_loose.style.visibility='visible';
    }

    /* Al ganar muestra un cartel que te permite volver a jugar o salir al menu del juego */
    function mostrar_cartel_win(){
        cartel_win.style.visibility='visible';
    }

    /* Al perder o ganar se muestra un cartel, esta funcion carga los botones para acceder al menu del juego o a volver a jugar*/
    function mostrar_botones(){
        boton_home.style.visibility='visible';
        boton_reload.style.visibility='visible';
    }

    /* Al ganar el personaje muestra una animacion de victoria */
    function mostrar_char_win(){
        char.classList.add(`char${personaje}_win`);
        char.classList.remove(`char${personaje}_run`);
        char.classList.remove(`char${personaje}_death`);
        char.classList.remove(`char${personaje}_jump`);
    }

    /* Inicia el JUEGO */
    const iniciar = () => {salto = false}


    /* Al perder o ganar el juego se detiene el fondo que esta en movimiento */
    function detener_fondo(){
        layer1.style.animationPlayState='paused';
        layer2.style.animationPlayState='paused';
        layer3.style.animationPlayState='paused';
        layer4.style.animationPlayState='paused';
        layer5.style.animationPlayState='paused';
        layer6.style.animationPlayState='paused';
    }

    /* Al perder la vida detiene la musica para dar lugar al sonido de muerte */
    function detener_musica(){
        let audioGame = document.getElementById("audioGame");      
        audioGame.pause();
    }

    /* Al recoger una moneda se ejecuta esta funcion que reproduce el sonido correspondiente */
    function coinSound(){
        const audioCoin = document.getElementById("audioCoin");      
        audioCoin.play();
    }

    /* Al morir se ejecuta esta funcion que reproduce el sonido correspondiente */
    function sonido_muerte(){
        let audioDeath = document.getElementById("audioDeath");
        audioDeath.play();
    }

    useEffect(() => {
        const char = document.getElementById("char"); 
        const mob1 = document.getElementById("mob1");
        const mob2 = document.getElementById("mob2");
        const coin = document.getElementById("coin");
        
   
        //EVENTOS DE TECLA --  El presionar la barra espaciadora el personaje SALTA / JUMP 
        //EVENTOS DE TECLA --  El presionar escape vuelve el juego a la pantalla de seleccion de personajes.
        //Inicia el juego si el personaje fue seleccionado en la pantalla de seleccion de personajes.
        if (personaje != null && fin == false) {
            iniciar();
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
            
            //Inicializa personaje, mobs y moneda. 
            char.classList.add(`char${personaje}_run`);
            mob1_pos = getRandomIntInclusive(randomMin,randomMax);
            mob2_pos = getRandomIntInclusive(randomMin,randomMax);
            if (diferencia(mob1_pos, mob2_pos) > distance) {
                mob2.style.left = mob2_pos + "px";
            } else mob2.style.left = `-120px`;
            mob1.style.left = mob1_pos + "px";
            /* mob1.style.left = `${getRandomIntInclusive(randomMin,randomMax)}px`;
            mob2.style.left = `${getRandomIntInclusive(randomMin,randomMax)}px`; */
            coin.style.left = `${getRandomIntInclusive(randomMin,randomMax)}px`;
        }
    });

    //Utilizamos el hook para disponer el tipo de jugador seleccionado (1 maga, 2 guerrero)
    function handleChange(event){
        setPersonaje(event.target.value);
    }

    //Funcion que retorna una valor aleatorio entre un minimo y un maximo dado. Es utilizada para posicionar elementos en el juego.
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    //Devuelve diferencia entre dos valores enteros
    const diferencia = (num1, num2) => {
        if (num1 >= num2) {
            return num1 - num2;
        } else {
            return num2 - num1;
        }
    }

    //Core del Juego - Efectua los controles cada 50 mlsec, en base a las posiciones del personaje y el resto de los items en pantalla.
    if (personaje != null) {
        let interval = setInterval(() => {
            if (fin == false) {
                mob1.style.left = (parseInt(mob1.style.left) - 10) + 'px';
                mob2.style.left = (parseInt(mob2.style.left) - 10) + 'px';
                coin.style.left = (parseInt(coin.style.left) - 12) + 'px';
            } else clearInterval(interval);
            let char_right = char.offsetLeft + char.clientWidth;
            //let char_bottom = char.clientHeight + char.offsetTop;
            let mob1_right = mob1.offsetLeft + mob1.clientWidth;
            let mob2_right = mob2.offsetLeft + mob2.clientWidth;
            let coin_bottom = coin.clientHeight + coin.offsetTop;
            //if ( (mob1.offsetLeft == char_right && !salto) || (salto && (char_bottom >= mob1.offsetTop && char.offsetLeft < mob_right) ) ) { 
            if ((mob1.offsetLeft <= char_right && salto == false && mob1_right > char.offsetLeft + 20) ){
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
            if ((mob2.offsetLeft <= char_right && salto == false && mob2_right > char.offsetLeft + 20) ){
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
                //coin.style.left = '800px';
                coin.style.transform = 'scale(2)';
                /* process.nextTick(() => {
                    coin.style.left = `${getRandomIntInclusive(randomMin,randomMax)}px`;
                    coin.style.transform = 'scale(1)';
                }) */
                setTimeout(() => {
                    coin.style.left = `${getRandomIntInclusive(randomMin,randomMax)}px`;
                    coin.style.transform = 'scale(1)';
                }, 30);
                
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
                    mob1_pos = getRandomIntInclusive(randomMin,randomMax);
                    mob2_pos = getRandomIntInclusive(randomMin,randomMax);
                    if (diferencia(mob1_pos, mob2_pos) > distance) {
                        mob2.style.left = mob2_pos + "px";
                    } else mob2.style.left = `-120px`;
                    mob1.style.left = mob1_pos + "px";
                }
                
            }

           /*  if (parseInt(mob1.style.left) + mob1.clientWidth <= -300) {
                //mob1.style.left = (parseInt(Math.random() * 100) + 800) + 'px';
                //mob1.style.left = `${getRandomIntInclusive(randomMin,randomMax)}px`;
                mob1_pos = getRandomIntInclusive(randomMin,randomMax);
                mob2_pos = getRandomIntInclusive(randomMin,randomMax);
                if (diferencia(mob1_pos, mob2_pos) > 300) {
                    mob2.style.left = mob2_pos + "px";
                } else mob2.style.left = `-120px`;
                mob1.style.left = mob1_pos + "px";
                console.log("mob1 " + mob1_pos + " - " + mob1.style.left);
                console.log("mob2 " + mob2_pos + " - " + mob2.style.left);
            } */   

            /* if (parseInt(mob1.style.left) + mob1.clientWidth <= 0) {
                mob1_pos = getRandomIntInclusive(randomMin,randomMax);
                if (diferencia(mob1_pos, mob2_pos) > distance) {
                    mob1.style.left = mob1_pos + 'px';
                } else mob1.style.left = '-120px';
                console.log("mob1 " + mob1_pos + " - " + mob2_pos);
            }

            if (parseInt(mob2.style.left) + mob2.clientWidth <= 0) {
                mob2_pos = getRandomIntInclusive(randomMin,randomMax);
                if (diferencia(mob1_pos, mob2_pos) > distance) {
                    mob2.style.left = mob2_pos + 'px';
                } else mob2.style.left = '-120px';
                console.log("mob2 " + mob2_pos + " - " + mob1_pos);
            } */

            if ( (parseInt(mob2.style.left) + mob2.clientWidth <= 0) || (parseInt(mob1.style.left) + mob1.clientWidth <= 0) ) {
                if (parseInt(mob1.style.left) + mob1.clientWidth <= 0) {
                    mob1_pos = getRandomIntInclusive(randomMin,randomMax);
                    mob1.style.left = mob1_pos + 'px';
                }
                if (parseInt(mob2.style.left) + mob2.clientWidth <= 0) {
                    mob2_pos = getRandomIntInclusive(randomMin,randomMax);
                    mob2.style.left = mob2_pos + 'px';
                }
                if (diferencia(parseInt(mob1.style.left), parseInt(mob2.style.left)) < 250) {
                    mob1.style.left = '-120px';
                }
            }

            if (parseInt(coin.style.left) + coin.clientWidth <= 0) {
                coin.style.left = `${getRandomIntInclusive(randomMin,randomMax)}px`;
            }
        }, 50);

    }

return(
    <>
        <Navbar_inGame></Navbar_inGame>

        {/* Si no hay un personaje seleccionado, se muestra la pantalla de seleccion de personajes, caso contrario comienza el juego */}
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
            <div id="mob2" className="mob2_run"></div>         
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

    .mob2_run{
        width: 120px;
        height: 120px;
        background: url('/ForestRunner/char/mob2.png');
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