import Icone from './imagem.js';

import {useState} from 'react';


function Pergunta({pergunta, resposta, index, ZapCard}){

    const [virado, virar] = useState(false);
    const [final,finalizar] = useState(false);
   
       return(  
            
           <div className='pergunta-aberta' onClick={() => virar(true)}>
               {!virado ? pergunta : resposta}
               {!virado ? (<div onClick={() => virar(true)}><Icone mostra="vira" /></div>) : ( 
               <div className='espaço-botoes'>
                    <button className='erro' onClick={() => ZapCard("erro")}>Não lembrei</button>
                    <button className='quase' onClick={() => ZapCard("quase")}>Quase não lembrei</button>
                    <button className='zap' onClick={() => ZapCard("certo")}>Zap!</button>
                </div>)
                }
               
           </div>
        )
}


function Carta({virar, index, ZapCard}){
    return(
    <div className='pergunta-fechada' onClick={() => virar(true)}> 
        {`pergunta ${index}`}
        <Icone mostra="play"/>
    </div>)
}

export default function Flashcard({index, pergunta, resposta, ZapCard}){

    const [virado, virar] = useState(false);

    return(
        <>
            {!virado ? (<Carta virar={virar} index={index}/>): (<Pergunta pergunta={pergunta} resposta={resposta} index={index} ZapCard={ZapCard}/>)}
        </>
    )
}