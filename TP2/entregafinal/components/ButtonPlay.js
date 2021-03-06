export default function ButtonPlay(){
  return (
    <>
      <a>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Jugar ahora
      </a>
      
      <style jsx>{`
        a{
            position: relative;
            display: inline-block;
            padding: 25px 30px;
            margin: 40px 0;
            color: var(--color-Secondary-D2);
            text-decoration: none;
            text-transform: uppercase;
            transition: 0.5s;
            letter-spacing: 4px;
            overflow: hidden;
            margin-right: 50px;
          
        }
        a:hover{
            background: var(--color-Secondary-D2);
            color: #050801;
            box-shadow: 0 0 5px var(--color-Secondary-D2),
                        0 0 25px var(--color-Secondary-D2),
                        0 0 50px var(--color-Secondary-D2),
                        0 0 200px var(--color-Secondary-D2);
            -webkit-box-reflect:below 1px linear-gradient(transparent, #0005);
        }
        a:nth-child(1){
            filter: hue-rotate(270deg);
        }
        a:nth-child(2){
            filter: hue-rotate(110deg);
        }
        a span{
            position: absolute;
            display: block;
        }
        a span:nth-child(1){
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg,transparent,var(--color-Secondary-D2));
            animation: animate1 1s linear infinite;
        }
        @keyframes animate1{
            0%{
                left: -100%;
            }
            50%,100%{
                left: 100%;
            }
        }
        a span:nth-child(2){
            top: -100%;
            right: 0;
            width: 2px;
            height: 100%;
            background: linear-gradient(180deg,transparent,var(--color-Secondary-D2));
            animation: animate2 1s linear infinite;
            animation-delay: 0.25s;
        }
        @keyframes animate2{
            0%{
                top: -100%;
            }
            50%,100%{
                top: 100%;
            }
        }
        a span:nth-child(3){
            bottom: 0;
            right: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(270deg,transparent,var(--color-Secondary-D2));
            animation: animate3 1s linear infinite;
            animation-delay: 0.50s;
        }
        @keyframes animate3{
            0%{
                right: -100%;
            }
            50%,100%{
                right: 100%;
            }
        }


        a span:nth-child(4){
            bottom: -100%;
            left: 0;
            width: 2px;
            height: 100%;
            background: linear-gradient(360deg,transparent,var(--color-Secondary-D2));
            animation: animate4 1s linear infinite;
            animation-delay: 0.75s;
        }
        @keyframes animate4{
            0%{
                bottom: -100%;
            }
            50%,100%{
                bottom: 100%;
            }
        }
      `}</style>

    </>
  )
    
}