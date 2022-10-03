import { useState } from 'react';
import ReactDOM from 'react-dom';
import Footer from './comnponents/footer';
import "./assets/css/reset.css";
import "./assets/css/style.css";
import LogoImg from './assets/img/logo.png';
import Flashcard from './comnponents/carta.js';


let cartas = [
    { pergunta: "qual a data da independencia do Brasil ?", resposta: "7 de setembro de 1822", }, 
    { pergunta: "quantas lordes das cinzas existem no dark souls 3 ?", resposta: "5, sendo eles: Ludleth of Courland, Abyss Watchers, Aldrich, Yhorm the Giant, Lothric"}, 
    { pergunta: "never gonna give you up ?", resposta: "Never gonna let you down!"}, 
    { pergunta: "fruta rica em calcio", resposta: "Banana"}
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
