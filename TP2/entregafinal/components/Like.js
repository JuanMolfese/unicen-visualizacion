import {useState} from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Like(){

    const router = useRouter();

    const { data: session } = useSession();
    
    const [isFavorite, setIsFavorite] = useState(false);
	
	const presionado = () => {
        setIsFavorite(!isFavorite);
    };

    const redirect = () => {
        router.push('/login')
    };
           
	return (       
        <>         
            <div className='iconLike' onClick={() => (session) ? presionado() : redirect()}>
                {isFavorite ? (
                    <FaHeart fill='red'></FaHeart>
                    ) : (
                    <FaRegHeart></FaRegHeart>
                )}
            </div>
            <style jsx>{`
                .iconLike{
                    width: 40px;
                    height: 40px;
                    box-shadow: 1px 1px 4px -1px rgba(0,0,0,0.70);
                    font-size: 1.5rem;
                    border-radius: 5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
              
             .iconLike:hover {
                cursor: pointer;  
                transform: scale(1.1);
              }
            `}
            </style>  

       </> 
    );
};