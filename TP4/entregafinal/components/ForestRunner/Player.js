import { Char } from "./Char";

export class Player extends Char {

    constructor (live, speed, posX, posY, char_coins, char_onJump){
        super(live, speed, posX, posY);
        this.char_coins = 0;
        this.char_onJump = false;
    }
   



}