import {useState} from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import styles from '../styles/Game.module.css';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router';

export default function Like(){
    const router = useRouter();

    const { data: session } = useSession();
    
    const [isFavorite, setIsFavorite] = useState(false);
	
	const presionado = () => {
            setIsFavorite(!isFavorite);
        };
    const redirect = () => {
        router.push('/register')
    }
           
	return (                
        <div className={styles.iconLike} onClick={() => (session) ? presionado() : redirect()}>
            {isFavorite ? (
                <FaHeart fill='red'></FaHeart>
                ) : (
                <FaRegHeart></FaRegHeart>
            )}
        </div>
    );
};