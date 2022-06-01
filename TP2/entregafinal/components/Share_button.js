import {useState} from 'react';
import { FaShareAlt, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Share_button(){

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
              <a><FaWhatsapp/></a>
              <a><FaFacebookF/></a>
            </div>
            <style jsx>{`
              
              .iconShare{
                width: 80px;
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
                font-size: 1.5rem;
              }

              .iconShare:hover{
                transform: scale(1.1);
              }

              .iconShare span{
                position: absolute;
                width: 100%;
                height: 100%;
                background: var(--color-bg-app-LIGHT);
                text-align: center;
                line-height: 40px;
                z-index: 999;
                transition: .6s linear;
                display: flex;
                align-items: center;
                justify-content: center;
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
  