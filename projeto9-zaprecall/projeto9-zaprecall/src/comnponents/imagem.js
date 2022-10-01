import play from '../assets/img/seta_play.png';
import vira from '../assets/img/seta_virar.png';
import erro from '../assets/img/icone_erro.png';
import certo from '../assets/img/icone_certo.png';
import quase from '../assets/img/icone_quase.png';

export default function Icone({mostra}){

    if(mostra==="play"){
        return(
            <img src={play} alt="" />
        )
    }

    if(mostra==="vira") {
        return(
            <img src={vira} alt="" />
        )
    }

    if(mostra==="erro") {
        return(
            <img src={erro} alt="" />
        )
    }

    if(mostra==="certo") {
        return(
            <img src={certo} alt="" />
        )
    }

    if(mostra==="quase") {
        return(
            <img src={quase} alt="" />
        )
    }
}