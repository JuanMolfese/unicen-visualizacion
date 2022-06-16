import { Navbar_inGame } from "../components/NavBar_inGame";
import Footer from "../components/Footer";
import styles from "../styles/playGame.module.css";
import React, { useState } from 'react';
import CantidadFichas from "../components/CantidadFichas";

export function PlayGame(){ 

    return(
        <>
            <Navbar_inGame></Navbar_inGame>            
            <div className={styles.playGameContainer}>
                <form action="/connect4_game" method="post" className={styles.selectCantFichas}>
                    <div>
                        <div><h2 className={styles.titulo}>Configuremos el tablero</h2></div>
                        <div><h3 className={styles.subtitulo}>Cantidad de fichas para ganar ?</h3></div>
                        <div className={styles.filaFichaCant}>
                            <input type="radio" id="4" name="selectFicha" value="4"></input>
                            <label className={styles.radiolabel} htmlFor="4">4 fichas</label>
                        </div>
                        <div className={styles.filaFichaCant}>
                            <input type="radio" id="5" name="selectFicha" value="5"></input>
                            <label className={styles.radiolabel} htmlFor="5">5 fichas</label>
                        </div>
                        <div className={styles.filaFichaCant}>
                            <input type="radio" id="6" name="selectFicha" value="6"></input>
                            <label className={styles.radiolabel} htmlFor="6">6 fichas</label>
                        </div>
                    </div>
                    <div className={styles.divbtn}><button className={styles.btnComenzar} type="submit">Comenzar</button></div>
                    
                </form>
            </div>
            <Footer></Footer>
        </>
    )
}
export default PlayGame;