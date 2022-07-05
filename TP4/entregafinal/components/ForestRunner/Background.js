import React, { useEffect } from 'react';

export default function Background({gameOver}){

    if (gameOver) { 
        layer1.style.animation="pause";
        layer2.style.animation="pause";
        layer3.style.animation="pause";
        layer4.style.animation="pause";
        layer5.style.animation="pause";
        layer6.style.animation="pause";
    }

    useEffect(() => {
        const layer1 = document.getElementById("layer1");
        const layer2 = document.getElementById("layer2");
        const layer3 = document.getElementById("layer3");
        const layer4 = document.getElementById("layer4");
        const layer5 = document.getElementById("layer5");
        const layer6 = document.getElementById("layer6");
    })

    
    return(
            <>
                <div className="fondo">
                    <div id="layer1" className="layer layer-6"></div>
                    <div id="layer2" className="layer layer-5"></div>
                    <div id="layer3" className="layer layer-4"></div>
                    <div id="layer4" className="layer layer-3"></div>
                    <div id="layer5" className="layer layer-2"></div>
                    <div id="layer6" className="layer layer-1"></div>
                </div>

                <style jsx>{`
                    .layer{
                        min-height: 500px; 
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        background-repeat: repeat-x;
                        background-size: cover;
                        animation-name: scroll;
                        animation-timing-function: linear;
                        animation-iteration-count: infinite;
                        z-index: -1;
                        animation-play-state: running; /* permite pausar la animacion */
                    }
                    
                    .layer-6{
                        background-image: url("/ForestRunner/background/11.png");
                        animation-duration: 35s;    
                    }
                    
                    .layer-5{
                        background-image: url("/ForestRunner/background/12.png");
                        animation-duration: 25s;
                    }
                    
                    
                    .layer-4{
                        background-image: url("/ForestRunner/background/14.png");
                        animation-duration: 20s;
                    }
                    
                    .layer-3{
                        background-image: url("/ForestRunner/background/13.png");
                        animation-duration: 15s;
                    }
                    
                    .layer-2{
                        background-image: url("/ForestRunner/background/2.png");
                        animation-duration: 6s;
                    }
                    
                    .layer-1{
                        background-image: url("/ForestRunner/background/1.png");
                        animation-duration: 1s;
                        z-index: 10;
                    }
                    
                    @keyframes scroll {
                        0% {background-position-x: 0px;}
                        100%{background-position-x: -800px;}
                    }
                
                `}</style>
            </>
        );        
}