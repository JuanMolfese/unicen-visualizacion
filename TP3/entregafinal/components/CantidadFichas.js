import React, { useState } from 'react';

export default function CantidadFichas(){

    const [cant_Fichas, setCantFichas] = useState(4);

    return(
        <>
            <button onClick={() => setCantFichas(cant_Fichas + 1)}>+</button>
            <button onClick={() => setCantFichas(cant_Fichas - 1)}>-</button>
        </> 
    )
}