import {useState} from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import styles from '../styles/Game.module.css';


export default function Like(){
    
    const [isFavorite, setIsFavorite] = useState(false);
	
	const presionado = () => {
            setIsFavorite(!isFavorite);
        };
           
	return (                
        <div className={styles.iconLike} onClick={() => presionado()}>
            {isFavorite ? (
                <FaHeart fill='red'></FaHeart>
                ) : (
                <FaRegHeart></FaRegHeart>
            )}
        </div>
    );
};