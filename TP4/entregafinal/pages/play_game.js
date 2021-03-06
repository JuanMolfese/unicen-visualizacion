import { Navbar_inGame } from "../components/NavBar_inGame";
import Footer from "../components/Footer";
import styles from "../styles/playGame.module.css";
import React, { useState} from 'react';
import { Circle } from "../components/Connect4/Circle";
import { FaInfo } from "react-icons/fa";


export function PlayGame(){ 

    const [fichas, setFichas] = useState(0);
    let secs = 59;
    let mins = 9;
    let stopwatchInterval;

    const timerCycle = () => {
        stopwatchInterval = setInterval( () => {
            document.getElementById("tiempo").textContent = (secs < 10) ? `0${mins}:0${secs}` : `0${mins}:${secs}`;
            if (secs === 0) {
                if (mins === 0) {
                    clearInterval(stopwatchInterval);
                    document.getElementById("timeOut").style.display = "block";
                } else {
                    mins--;
                    secs = 59;
                }
            } else {
                secs--;
            }
        }, 1000);
    }
    
    const handleChange = (event) => {
        setFichas(event.target.value);
        document.getElementById("btnPlay").disabled = false;
    }

    const gamePlay = (e) => {
        e.preventDefault();
        //router.push(`/connect4_game/${fichas}`);
        document.getElementById("form").style.display = "none";
        document.getElementById("game").style.display = "block";
        game(fichas);
        timerCycle();
    };

    const reload = () => {
        window.location.reload(true);
    }

    const game = (fichas) => {
        const CANTIDADFICHAS = fichas;
        const filas = parseInt(CANTIDADFICHAS) + 2;
        const columnas = parseInt(CANTIDADFICHAS) + 3;
        const CANT_FIGURAS = filas * columnas / 2 + 1; 

        document.getElementById("recuerdo").innerHTML = `Recuerda que la cantidad de fichas para ganar es: ${CANTIDADFICHAS}`;        
        let turno = document.getElementById("turno");
        let imgTurn = document.getElementById("imgTurn");
        let canvas = document.getElementById("canvas");
        /** @type {CanvasRenderingContext2D} */   //agrego linea para que interprete y ayude cuando uses .ctx
        let ctx = canvas.getContext("2d");
        let canvasWidth = canvas.width + (50 * (parseInt(CANTIDADFICHAS) - 4));
        let canvasHeight = canvas.height;


        let figures = [];
        let casilleros = []; //Guarda la posicion de los casilleros donde se coloca la ficha
        let ultimaFiguraClickeada = null;
        let isMouseDown = false;

        let board = [];


        function addFigure(color, jug, active) {
        addCircle(color, jug, active);
        drawFigure();
        }

        /* Borra el canvas y redibuja todo */
        function drawFigure() {
        clearCanvas();
        for (let i = figures.length - 1; i > 0; i--) {
            figures[i].draw();
        }
        }

        function drawTab(){
            /* dibujo base tablero */
            ctx.beginPath();
            ctx.fillStyle = "#DF7800";
            ctx.fillRect((220 + ((CANTIDADFICHAS - 6) * -1 * 20)) , 75, 50*columnas, 49*filas);

        }


        function clearCanvas() {
        //ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        /* ctx.fillStyle = "#BC71BC"; */
        /* ctx.fillRect(0, 0, canvasWidth, canvasHeight); */
        ctx.clearRect(0, 0, canvasWidth, canvasHeight); 
        addTablero();
        }
 
        /* Agrega un circulo */
        function addCircle(color, jug, active) {
        let x = Math.floor(((jug == 1) ? 50 : 750) + Math.random() * 100);
        let y = Math.floor(100 + Math.random() * 225);
        /* let radius = Math.floor(Math.random() * 50); */
        let fill = color;
        let circle = new Circle(x, y, 20, fill, ctx, jug, active);
        figures.push(circle);
        }


        function onMouseDown(event) {
        isMouseDown = true;
        if (ultimaFiguraClickeada != null) {
            ultimaFiguraClickeada.setResaltado(false);
            ultimaFiguraClickeada = null;
        }
        let FigClickeada = buscarFiguraClickeada(event.offsetX, event.offsetY);
        if (FigClickeada != null) {
            FigClickeada.setResaltado(true);
            FigClickeada.setPosition(event.offsetX,event.offsetY);
            ultimaFiguraClickeada = FigClickeada;
        }  
        drawFigure();
        }

        function buscarFiguraClickeada(x, y) {
        for (let i = 0; i < figures.length; i++) {
            if (figures[i].isPointInside(x, y)) {
            return figures[i];
            }
        }
        return null;
        }

        function onMouseUp(e) {
        if (ultimaFiguraClickeada != null) {
            isMouseDown = false;
            let isColocado = false;
            casilleros.forEach(elem => {
            if (elem.x > e.offsetX - 10 && elem.x < e.offsetX + 10 && elem.y > e.offsetY - 10 && elem.y < e.offsetY + 10) {
                let columna = casilleros.indexOf(elem);
                for (let index = filas - 1; index >= 0; index--) {
                    let casilla = board[index][columna]; 
                    if (casilla.value == 0) {
                        isColocado = true;
                        board[index][columna].value = ultimaFiguraClickeada.jugador;
                        ultimaFiguraClickeada.setPosition(board[index][columna].x, board[index][columna].y);
                        ultimaFiguraClickeada.setIsClickable(false);
                        ultimaFiguraClickeada.setResaltado(false);
                        ultimaFiguraClickeada.setIsPut(true);
                        deshabilitarFichas(ultimaFiguraClickeada.jugador);
                        (ultimaFiguraClickeada.jugador == 1) ? turno.textContent = "Turno jugador: 2" : turno.textContent = "Turno jugador: 1";
                        (ultimaFiguraClickeada.jugador == 1) ? imgTurn.src = "/imgGame/img11.png" : imgTurn.src = "/imgGame/img12.png";
                        if (comprobarGanador(board, index, columna, filas, columnas)) {
                            turno.textContent = `???? El jugador ${ultimaFiguraClickeada.jugador} ha ganado !!`;
                            imgTurn.src = "/imgGame/img3.png";
                            deshabilitarTodasLasFichas();
                            clearInterval(stopwatchInterval);
                        }
                        if (tableroLeno()) {
                            turno.textContent = "??????El juego ha finalizado en empate!!!";
                            imgTurn.src = "/imgGame/img13.png";
                            deshabilitarTodasLasFichas();
                            clearInterval(stopwatchInterval);
                        }
                        drawFigure();
                        break;
                    }
                }
            }
            });
            if (!isColocado){
                ultimaFiguraClickeada.setPosition(ultimaFiguraClickeada.getPositionOriginal().x, ultimaFiguraClickeada.getPositionOriginal().y);
                drawFigure();
            }
        }
        }

        function onMouseMove(event) {
        if (isMouseDown && ultimaFiguraClickeada != null) {
            ultimaFiguraClickeada.setPosition(event.offsetX, event.offsetY);
            drawFigure();
        }
        }

        function play (){
        for (let i = 0; i < filas; i++) {
            board[i] = [];
            for (let j = 0; j < columnas; j++) {
            board[i][j] = ({ x: 0, y: 0, value: 0 });
            }
        }
        for (let i = 0; i < CANT_FIGURAS; i++) {
            let img1 = new Image(40,40);
                img1.src = "/imgGame/img12.png";
            let img2 = new Image(40,40);
                img2.src = "/imgGame/img11.png";
            img1.onload = () => {
            addFigure(/* 'green' */ img1 , 1, true);
            }
            img2.onload = () => {
            addFigure(/* 'blue' */  img2 , 2, false);  
            }
        }
        deshabilitarFichas(2);
        addTablero();
        }

        function deshabilitarFichas(jug) {
        figures.forEach(ficha => {
            if (ficha.jugador == jug && !ficha.isPut) {
            ficha.setIsClickable(false);
            } else if (!ficha.isPut) {
            ficha.setIsClickable(true);
            }
        });
        }

        function deshabilitarTodasLasFichas(){
        figures.forEach(ficha => {
            ficha.setIsClickable(false);
        });
        }

        play();


        function addTablero() {
        casilleros = [];   
        
        drawTab(); 

        for (let x = 0; x < columnas; x++) {
            ctx.beginPath();
            let posx = (250 + ((CANTIDADFICHAS - 6) * -1 * 20)) + x * 48;
            ctx.arc(posx, 50, 21, Math.PI * 1, 0, true);
            /* ctx.fillStyle = "#FFF7CE"; */
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;
            /* ctx.fill(); */
            ctx.stroke();
            casilleros.push({ x: posx, y: 50 });
        }
        
        for (let i = 0; i < filas; i++) {
            /* board[i] = []; */
            for (let j = 0; j < columnas; j++) {
            /* ctx.strokeStyle = `rgb(
                0,
                ${Math.floor(255 - 42.5 * i)},
                ${Math.floor(255 - 42.5 * j)})`; */
                ctx.fillStyle = "white";
                ctx.beginPath();
                let positionx = (250 + ((CANTIDADFICHAS - 6) * -1 * 20))  + j * 48;
                let positiony = 100 + i * 48;
                ctx.arc(positionx, positiony, 21, 0, Math.PI * 2, true);
                ctx.fill(); //agrego fondo blanco
                /* ctx.stroke(); */
                /* Inicializamos la matriz de front */
                /* board[i][j] = ({ x: positionx, y: positiony }); */
                board[i][j].x = positionx;
                board[i][j].y = positiony;
            }
            }    
        }

        function tableroLeno(){
            for (let i = 0; i < filas; i++) {
                for (let j = 0; j < columnas; j++) {
                    if (board[i][j].value == 0) {
                        return false;
                    }
                }
            }
            return true;
        }

        canvas.addEventListener("mousedown", onMouseDown, false);
        canvas.addEventListener("mouseup", onMouseUp, false);
        canvas.addEventListener("mousemove", onMouseMove, false);

        /* Verificar ganador */

        function comprobarGanador(board, fila, col, filas, columnas) {
        //Mirar en todas las direcciones a partir de donde cayo la ficha para comprobar si gano
        if (verificarHorizontal(board, fila, col, columnas) || verificarAbajo(board, fila, col, filas) || verificarDiagonalIzquierda(board, fila, col, filas, columnas) || verificarDiagonalDerecha(board, fila, col, filas, columnas)){
            return true;
        }
        return false;
        }

        function verificarHorizontal(board, fila, col, columnas) {
        let cantFichasIguales = 0;
        while ((col < columnas-1) && (board[fila][col].value == board[fila][col+1].value)){ // verifica cuantas fichas iguales tiene a la derecha
            col++;
            cantFichasIguales++;
        }
        col -= cantFichasIguales; //se para en la columna donde cayo la ficha en un principio. (evita recorrer de nuevo)
        cantFichasIguales++; 
        while ((col > 0) && (cantFichasIguales < CANTIDADFICHAS)) { // verifica cuantas fichas iguales tiene a la izquierda
            if (board[fila][col].value != board[fila][col-1].value) {
            return false;
            } else {
            ++cantFichasIguales;
            col--;
            }
        }
        if (cantFichasIguales == CANTIDADFICHAS) {
            return true;
        } else return false;
        }

        function verificarAbajo (board, fila, col, filas){
        let cantFichasIguales = 1;
        while ((fila < filas-1) && (cantFichasIguales < CANTIDADFICHAS)) {
            if (board[fila][col].value != board[fila+1][col].value) {//mira todas las fichas en la fila de abajo de la ficha ingresada
            return false;
            } else {
            cantFichasIguales++;
            fila++;
            }
        }
        if (cantFichasIguales == CANTIDADFICHAS) {
            return true;
        } else return false;
        }

        function verificarDiagonalDerecha(board, fila, col, filas, columnas){
        let cantFichasIguales = 0;
        while ((fila < filas-1) && (col < columnas-1) && (board[fila][col].value == board[fila+1][col+1].value)){//verifica abajo a la derecha si es igual y no se pase de la matriz
            fila++;
            col++;
            cantFichasIguales++;
        }
        fila -= cantFichasIguales; //se para en la fila que cayo en ppio
        col -= cantFichasIguales; //se para en la columna que vayo en ppio
        cantFichasIguales++;
        while ((fila > 0) && (col > 0) && (cantFichasIguales < CANTIDADFICHAS)){ //verifica arriba a la izquierda de la ficha
            if (board[fila][col].value != board[fila-1][col-1].value) {
            return false;
            } else {
            cantFichasIguales++;
            fila--;
            col--;
            }
        }
        if (cantFichasIguales == CANTIDADFICHAS) {
            return true;
        } else return false;
        }

        function verificarDiagonalIzquierda(board, fila, col, filas, columnas){
        let cantFichasIguales = 0;
        while ((fila < filas-1) && (col > 0) && (board[fila][col].value==board[fila+1][col-1].value)){ //verifica abajo a la izquierda
            fila++;
            col--;
            cantFichasIguales++;
        }
        fila -= cantFichasIguales;
        col += cantFichasIguales;
        cantFichasIguales++;
        while ((fila > 0) && (col < columnas-1) && (cantFichasIguales < CANTIDADFICHAS)){ //verifica arriba a la derecha
            if (board[fila][col].value != board[fila-1][col+1].value) {
            return false;
            } else {
            cantFichasIguales++;
            fila--;
            col++;
            }
        }
        if (cantFichasIguales == CANTIDADFICHAS) {
            return true;
        } else return false;
    }
    }

    return(
        <>
            <div className={styles.timeOut} id="timeOut">
                <div className={styles.contentTime}>
                    <div className={styles.timeInfo}>
                        <FaInfo size={80} className={styles.iconInfo}/>
                        <p className={styles.tiempoAgotado}>
                            Tiempo de juego agotado
                        </p>
                        <button onClick={reload}>OK</button>
                    </div>
                </div>
            </div>

            <Navbar_inGame></Navbar_inGame>            
            <div className={styles.playGameContainer}>
                <form id="form" onSubmit={gamePlay} method="post" className={styles.selectCantFichas}>
                    <div>
                        <div><p className={styles.megatitulo}>4 en Linea</p></div>
                        <div><p className={styles.titulo}>Configuremos el tablero</p></div>
                        <div><p className={styles.subtitulo}>??Cantidad de fichas para ganar?</p></div>
                        <div className={styles.filaFichaCant}>
                            <input type="radio" id="4" name="selectFicha" value="4" onClick={handleChange}></input>
                            <label className={styles.radiolabel} htmlFor="4">4 fichas</label>
                        </div>
                        <div className={styles.filaFichaCant}>
                            <input type="radio" id="5" name="selectFicha" value="5" onClick={handleChange}></input>
                            <label className={styles.radiolabel} htmlFor="5">5 fichas</label>
                        </div>
                        <div className={styles.filaFichaCant}>
                            <input type="radio" id="6" name="selectFicha" value="6" onClick={handleChange}></input>
                            <label className={styles.radiolabel} htmlFor="6">6 fichas</label>
                        </div>
                    </div>
                    <div className={styles.divbtn}><button id="btnPlay" className={styles.btnComenzar} type="submit" disabled={true}>Comenzar</button></div>
                </form>
                <div className={styles.canvas} id="game">
                    <div className={styles.headGame}>
                        <div className={styles.divReloj}>
                            <p className={styles.timeCount} id="tiempo">10:00</p>
                        </div>
                        <div>
                            <p id="turno" className={styles.turnoJugador}>Turno jugador : 1</p>
                            <img id="imgTurn" className={styles.imgFichaTurno} src="/imgGame/img12.png"></img>
                        </div>
                        <button onClick={reload}>Reset</button>
                    </div>
                    <canvas id="canvas" width="900" height="500"></canvas>
                    <p id="recuerdo" className={styles.nota}></p>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
export default PlayGame;