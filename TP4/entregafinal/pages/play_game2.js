import { Navbar_inGame } from "../components/NavBar_inGame";
import Footer from "../components/Footer";
import React, { useState, useEffect } from 'react';
import Background from "../components/ForestRunner/Background";

export default function Play_Game2(){

    const [gameOver, setGameOver] = useState(false); 
    const [personaje, setPersonaje] = useState(null);

    function jump(){
        char.classList.remove(`char${personaje}_jump`); 
        char.classList.add(`char${personaje}_run`);        
    }

    function mostrar_cartel_loose(){
        cartel_loose.style.visibility='visible';
    }

    function mostrar_cartel_win(){
        cartel_win.style.visibility='visible';
    }

    function detener_fondo(){

        /*   backgroundAnimation.forEach(animation =>{
            const running = animation.style.animationPlayState || 'running';
            animation.style.animationPlayState = running === 'running' ? 'paused' : 'running';
        }) */

        layer1.style.animationPlayState='paused';
        layer2.style.animationPlayState='paused';
        layer3.style.animationPlayState='paused';
        layer4.style.animationPlayState='paused';
        layer5.style.animationPlayState='paused';
        layer6.style.animationPlayState='paused';
    }

    useEffect(() => {
        const char = document.getElementById("char"); 
        const mob1 = document.getElementById("mob1");
        const coin = document.getElementById("coin");
        
         //EVENTOS DE TECLA --  por ej BARRA ESPACIADORA PARA SALTAR// 
   
        if (personaje != null) {
            window.addEventListener("keydown", function (event) {     
            
                if (event.key == " ") {
    
                    char.classList.add(`char${personaje}_jump`);
                    char.classList.remove(`char${personaje}_run`);
                    char.classList.remove(`char${personaje}_death`);
                    this.setTimeout(jump, 1300);
                }
                else if (event.key === "d") {  //EN CASO DE MORIR, ahora prueb ocon la tecla D
                    char.classList.remove(`char${personaje}_run`);
                    char.classList.add(`char${personaje}_death`);
                    setGameOver(true);
                    this.setTimeout(detener_fondo, 1200);
                    this.setTimeout(mostrar_cartel_loose,1200);            
                }
                else if (event.key === "w") {  //EN CASO DE GANAR, ahora prueb ocon la tecla W
                    
                    this.setTimeout(mostrar_cartel_win,1200);            
                }       
                else if (event.key ===  "Escape"){
                    window.location.href = " ";
                }
            }); 
            char.classList.add(`char${personaje}_run`);
            mob1.style.left = '800px';
        }
    })

    function handleChange(event){
        setPersonaje(event.target.value);
    }


    if (personaje != null) {
        let interval = setInterval(() => {
            mob1.style.left = (parseInt(mob1.style.left) - 5) + 'px';
            /* console.log(mob1.offsetLeft - mob1.clientWidth - 4); */
            if ((mob1.offsetLeft == char.offsetLeft + char.clientWidth)) {
                char.classList.remove(`char${personaje}_run`);
                char.classList.add(`char${personaje}_death`);
                clearInterval(interval);
                setGameOver(true);
                setTimeout(detener_fondo, 1200);
                setTimeout(mostrar_cartel_loose,1200);  
            }
        }, 50);

    }

    //para que esto funcione, hay que sacar la animacion a #mob1_despl_X
    

return(
    <>
        <Navbar_inGame></Navbar_inGame>
        {(personaje == null) ? 
        <>
            {/* <h2 className="titleSelect">Seleccione un personaje para comenzar:</h2> */}
            <div className="contentSelect">
                <input id="pers1" type="radio" name="selectPers" onChange={handleChange} value="1"/>
                <label for="pers1" className="itemPers"><img src="/ForestRunner/char/char.png"></img></label>
                <input id="pers2" type="radio" name="selectPers" onChange={handleChange} value="2"></input> 
                <label for="pers2" className="itemPers"><img src="/ForestRunner/char/char2.png"></img></label>
            </div> 
        </>
        :
        <div className="container">
            
            <Background gameOver={gameOver}></Background>

            {/* <a href=""><div id="go_back"></div></a> */}

            <div id="coins_counter"></div>
            
            <div id="char" className="char"></div>
            
            
            <div id="mob1" className="mob1_run"></div>
            
            
            <div id="coin_despl_X">
                <div id="coin" className="coin"></div>
            </div>

            <div id="cartel_win"></div>
            <div id="cartel_loose"></div>
                        
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
    }
    
    p{
        margin: 0;
    }
    /*contador numerico creado desde JS*/
    
    #coin_counter{   
        color: #fff; 
        font-size: 35px;   
        textAlign: center; 
        width: 70px;
        height: 70px;
        position: absolute;    
        z-index: 13;
        left: 700px;
        top: 35px;
        font-family: Arial, Helvetica, sans-serif;
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