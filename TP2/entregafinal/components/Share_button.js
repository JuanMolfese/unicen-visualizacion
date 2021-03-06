import {useState} from 'react';
import { FaShareAlt, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Share_button({game}){

    const router = useRouter();

    const { data: session } = useSession();
    
    const [isFavorite, setIsFavorite] = useState(false);
	
	const presionado = () => {
        setIsFavorite(!isFavorite);
    };

    const redirect = () => {
        router.push('/register')
    };
           
	return (       
        <>         
            <div className='iconShare'>
              <span><FaShareAlt/></span>
              <a className='whatsapp' href={`https://api.whatsapp.com/send?text= Mira que buen juego !! https://unicen-visualizacion-juanmolfese.vercel.app/games/${game.id}`} target="_blank" ><FaWhatsapp/></a>
              <a className='facebook'><FaFacebookF/></a>
            </div>
            <style jsx>{`
              
              .iconShare{
                width: 40px;
                height: 40px;
                box-shadow: 1px 1px 4px -1px rgba(0,0,0,0.70);
                background: #dfe6e9;
                border-radius: 5px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                overflow: hidden;
                position: relative;
                cursor: pointer;
                transition: .3s linear;
                margin-right: 15px;
                font-size: 1.25rem;
              }

              .iconShare:hover{
                transform: scale(1.1);
                width: 80px;
              }

              .iconShare span{
                position: absolute;
                width: 100%;
                height: 100%;
                background: var(--color-bg-app-LIGHT);
                text-align: center;
                z-index: 9;
                transition: .6s linear;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.5rem;
              }

              .iconShare:hover span{
                transform: translateX(-100%);
                transition-delay: .3s;
              }

              .iconShare a{
                flex: 1,
                font-size: 1.5rem;
                text-align: center;
                transform: translateX(-100%);
                opacity: 0;
                transition: .3s linear;
              }

              .whatsapp{
                color: #00bb2d;
              }

              .facebook{
                color: #3b5998;
              }

              .iconShare:hover a{
                transform: translateX(0);
                opacity: 1;
              }

              .iconShare a:nth-of-type(1){
                transition-delay: .1s;
              }

              .iconShare a:nth-of-type(2){
                transition-delay: .8s;
              } 
            `}
            </style>  

       </> 
    );
};



{/* <a href={`https://api.whatsapp.com/send?text= Mira que buen juego !! https://unicen-visualizacion-juanmolfese.vercel.app/games/${game.id}`} target="_blank" ><span><FaWhatsapp/></span></a> */}
  