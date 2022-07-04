import { Navbar_inGame } from "../components/NavBar_inGame";
import Footer from "../components/Footer";
import styles from "../styles/playGame.module.css";
import React, { useState } from 'react';
import Background from "../components/ForestRunner/Background";

export default function Play_Game2(){

    const [gameOver, setGameOver] = useState(false); 



return(
    <>
        <Navbar_inGame></Navbar_inGame>

        <div className="container">
            
            <Background></Background>

            <a href=""><div id="go_back"></div></a>

            <div id="coins_counter"></div>
            
            <div id="char" className="char_run"></div>
            
            <div id="mob1_despl_X">
                <div id="mob1" className="mob1_run"></div>
            </div>
            
            <div id="coin_despl_X">
                <div id="coin" className="coin"></div>
            </div>

            <div id="cartel_win"></div>
            <div id="cartel_loose"></div>
                        
        </div>

        <Footer></Footer>
<style jsx>{`

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
    .char_run{
        width: 128px;
        height: 128px;
        background: url('/ForestRunner/char/char_mage_run.png');
        animation: char_run 0.7s steps(8) infinite;
        MozAnimation: char_run 0.7s steps(8) infinite;
        WebkitAnimation: char_run 0.7s  steps(8) infinite;
        zIndex: 2;
        transform : scale(2);
        position: absolute;
        left: 100px;
        top: 400px;
    }
    
    .char_death{
        width: 128px;
        height: 128px;
        background: url('/ForestRunner/char/char_mage_death.png');
        animation: char_death 1.3s steps(11) 1 normal forwards;    
        MozAnimation: char_death 1.3s steps(11) 1 forwards;
        WebkitAnimation: char_death 1.3s steps(11) 1 forwards;
        zIndex: 2;
        transform : scale(2);
        position: absolute;
        left: 100px;
        top: 400px;       
       
    }
    
    .char_jump{
        width: 128px;
        height: 128px;
        background: url('/ForestRunner/char/char_mage_jump.png');
        animation: char_jump 1.3s steps(12) 1;
        MozAnimation: char_jump 1.3s steps(12) 1;
        WebkitAnimation: char_jump 1.3s steps(12) 1;
        zIndex: 2;
        transform : scale(2);
        position: absolute;
        left: 100px;
        top: 400px;   
    }
    
    .mob1_run{
        width: 128px;
        height: 128px;
        background: url('/ForestRunner/char/mob1_run.png');
        animation: mob1_run 2s steps(12) infinite;
        MozAnimation: mob1_run 2s steps(12) infinite;
        WebkitAnimation: mob1_run 2s steps(12) infinite;
        zIndex: 2;
        transform : scale(1.5);
        position: absolute;
        top: 440px;    
    }   
    
    #mob1_despl_X{
        animation: mob1_desplace 3.5s linear infinite;  
    }
    
    .coin{
        width: 70px;
        height: 70px;
        background: url('/ForestRunner/coins/coin_70_70.png');
        animation: coin2 0.8s steps(6) infinite;  
        MozAnimation: coin2 0.8s steps(6) infinite;
        WebkitAnimation: coin2 0.8s steps(6) infinite;
        zIndex: 2;    
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
        zIndex: 11;
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
        zIndex: 11;
        visibility: hidden;
    }
    
    
    #coins_counter{    
        width: 159px;
        height: 85px;
        background: url('/ForestRunner/carteles/coin_count.png');
        position: absolute;    
        zIndex: 12;
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
        zIndex: 13;
        left: 700px;
        top: 35px;
        font-family: Arial, Helvetica, sans-serif;
    }
    
    
    #go_back{    
        width: 71px;
        height: 78px;
        background: url('/ForestRunner/carteles/btn_back.png');
        position: absolute;    
        zIndex: 12;
        left: 20px;
        top: 20px;
    }

    /* Animacion Correr del personaje */

    @keyframes char_run{
        0%{background-position: 0px;}
        100%{background-position: -1024px;}   
    }

    /* Animacion Morir del personaje */
    @keyframes char_death{
        0%{background-position: 0px; opacity: 1;}
        99%{opacity: .8;}
        100%{background-position: -1408px;opacity: 0;}   
    }

    /* Animacion Saltar del personaje */
    @keyframes char_jump{
        0%{background-position: 0px; margin-top: 390px;}
        50%{margin-top: 150px;}
        100%{background-position: -1536px; margin-top: 390px;}       
    }

    @keyframes mob1_run{
        0%{background-position: 0px;}
        100%{background-position: -1538px;}
    }

    @keyframes mob1_desplace{
        0%{transform: translateX(1100px);}
        100%{transform: translateX(-80px);}
    }
    
    @keyframes coin2{
        0%{background-position: 0px;}
        100%{background-position: -420px;}
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