import Icone from './imagem.js';
import {useState} from 'react';

function Pergunta(){
    return(
        <div>sou feliz</div>
        
    )
}


export default function Carta({index}){

    const [virado, virar] = useState(false);

    return(
        <div>
            {!virado ? (
                <div className='pergunta-fechada' onClick={() => virar(true)}> 
                    {`pergunta ${index}`}
                    <Icone mostra="play"/>
                </div>): 
                (<Pergunta />)
            }
        </div>
        
        
    )
}

//perguntar: <Icone mostra='play'/>