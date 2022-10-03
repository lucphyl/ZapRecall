import { useState } from 'react';
import ReactDOM from 'react-dom';
import Footer from './comnponents/footer';
import "./assets/css/reset.css";
import "./assets/css/style.css";
import LogoImg from './assets/img/logo.png';
import Flashcard from './comnponents/carta.js';


let cartas = [
    { pergunta: "teste", resposta: "maçã", }, 
    { pergunta: "teste2", resposta: "banana"}, 
    { pergunta: "teste3", resposta: "mamão"}, 
    { pergunta: "teste4", resposta: "laranja"}
];
let incremento = 0;

function App(){
    //const [respondido, responder] = useState([]);


    function ZapCard(status){
        console.log("sou feliz", status);
        //responder([...respondido,status]);
        incremento++;
    }

    return(
        <div className='screen-container'>
            <div className='logo-container '>
                <img src={LogoImg}alt=''></img>
                <h1>zap recall</h1>
            </div>

            {cartas.map((carta, index) => <Flashcard 
                key={index} 
                index={index+1} 
                pergunta={carta.pergunta} 
                resposta={carta.resposta} 
                ZapCard={ZapCard}/>)
            }


           < Footer >
                {`${incremento}/${cartas.length} respondidos`}
           </Footer>
        </div>
    )
}

ReactDOM.render(App(), document.querySelector('.root'));
