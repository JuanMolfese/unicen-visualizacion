import Ficha from './Ficha.js';

export default function Connect4() { 


    // CONTENIDO DE LA CLASE //

    let canvas = document.getElementById("canvas");
    /** @type {CanvasRenderingContext2D} */
    let ctx = canvas.getContext("2d");
    
    let width = canvas.width;
    let height = canvas.height;
    
    let h = 40;
    let w = 50;
    
    let figures = [];
    
    let cantidadFiguras = 6;
    
    function draw(){
        for (var i = 0; i < cantidadFiguras; i++){
            let posX = Math.random() * width;
            let posY = Math.random() * height;
            let figure = new Figure(generarColor(),h,w,posX,posY,i,ctx);
            figure.draw();
            figures.push(figure);
        }
    }
    
    function generarColor(){
        let r = Math.round(Math.random() * 255);
        let g = Math.round(Math.random() * 255);
        let b = Math.round(Math.random() * 255);
        return `rgb(${r},${g},${b})`;
    }
    
    function getMousePos(canvas, evt) {
        let ClientRect = canvas.getBoundingClientRect();
        return {
            x: Math.round(evt.clientX - ClientRect.left),
            y: Math.round(evt.clientY - ClientRect.top)
        }
    }
    
    let clickedElement = document.getElementById('clicked');
    canvas.addEventListener('click', function(evt){
        let pos = getMousePos(canvas,evt);
        for(var i=0; i < figures.length; i++){
            if (figures[i].isClicked(pos.x,pos.y)){
                clickedElement.innerHTML = figures[i].id;
            }
        }
    });
    
    draw();

    //FIN CONTENIDO DE LA CLASE//



    return (
        <>
        {/* HTML DE LA CLASE PRACTICA */}
            <canvas height="500" width="500" id="canvas" style="border: 1px solid black;"></canvas>
            <div>ID Clickeado <span id="clicked"></span></div>
            <script src="js/figure.js"></script>
            <script src="js/index.js"></script>
        {/*FIN HTML DE LA CLASE PRACTICA */}

        </>
    )
}