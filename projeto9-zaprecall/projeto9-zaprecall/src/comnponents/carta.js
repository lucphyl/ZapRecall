import Icone from './imagem.js';
import CartaRespondido from './cartarespondido.js';
import {useState} from 'react';


function Pergunta({pergunta, resposta, index}){

    const [virado, virar] = useState(false);

    return(

        <>
            {!virado ?(<div className='pergunta-aberta' onClick={() => virar(true)}>
                {pergunta}
                <Icone mostra="vira" />
            </div>): (<Resposta resposta={resposta} index={index}/>)
            }
            
        </>
    )
}

function Resposta ({resposta, index}){

    const [virado, virar] = useState(false);

    return(
        <>
            {!virado ? ( <div className='pergunta-aberta'>
                {resposta}
                <div className='espaço-botoes'>
                    <button className='erro' onClick={() => virar(true) }>Não lembrei</button>
                    <button className='quase' onClick={() => virar(true)}>Quase não lembrei</button>
                    <button className='zap' onClick={() => virar(true)}>Zap!</button>
                </div>
                
            </div>) : (<CartaRespondido index={index} />)}
           
        </>

    )
}

function Carta({virar, index}){
    return(
    <div className='pergunta-fechada' onClick={() => virar(true)}> 
        {`pergunta ${index}`}
        <Icone mostra="play"/>
    </div>)
}

export default function Flashcard({index, pergunta, resposta}){

    const [virado, virar] = useState(false);

    return(
        <>
            {!virado ? (<Carta virar={virar} index={index}/>): (<Pergunta pergunta={pergunta} resposta={resposta} index={index}/>)}
        </>
    )
}