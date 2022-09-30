import ReactDOM from 'react-dom';

import "./assets/css/reset.css";
import "./assets/css/style.css";

import LogoImg from './assets/img/logo.png';

import Carta from './comnponents/carta.js';

let cartas = [
    { pergunta: "teste", resposta: "maçã", }, 
    { pergunta: "teste2", resposta: "banana"}, 
    { pergunta: "teste3", resposta: "mamão"}, 
    { pergunta: "teste4", resposta: "laranja"}
];


function App(){

    return(
        <div className='screen-container'>
            <div className='logo-container '>
                <img src={LogoImg}alt=''></img>
                <h1>zap recall</h1>
            </div>

            {cartas.map((cartas, index) => <Carta key={"index"} index={index+1} />)}


            <div className='footer-concluidos'>
                <div className='container-botoes'>
                    <button>Não lembrei</button>
                    <button>Quase não lembrei</button>
                    <button>Zap!</button>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(App(), document.querySelector('.root'));
