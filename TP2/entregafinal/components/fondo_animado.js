

export function Fondo_animado(){
    return (
        <>
            <div className='bg'></div>
            <div className='bg bg2'></div>
            <div className='bg bg3'></div> 

            <style jsx>{`
                .bg {
                    animation:slide 3s ease-in-out infinite alternate;
                    background-image: linear-gradient(-25deg, var(--color-Primary) 40%, var(--color-Tertiary) 50%);
                    bottom:0;
                    left:-50%;
                    opacity:.9;
                    position:fixed;
                    right:-50%;
                    top:0;
                    z-index:-999;
                }
                
                .bg2 {
                    animation-direction:alternate-reverse;
                    animation-duration:4s;
                }
                
                .bg3 {
                    animation-duration:5s;
                }
                        
                @keyframes slide {
                    0% {
                    transform:translateX(-25%);
                    }
                    100% {
                    transform:translateX(25%);
                    }
                }
            `}
            </style>       
        </>

    )
}
export default Fondo_animado;