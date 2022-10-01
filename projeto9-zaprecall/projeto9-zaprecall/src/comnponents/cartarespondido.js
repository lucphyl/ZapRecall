import Icone from "./imagem";
export default function CartaRespondido ({index}){

    return(
        <>
        <div className='pergunta-fechada'>
            {`resposta ${index}`}
            <Icone mostra="certo"/>
        </div>
        </>
    )
}