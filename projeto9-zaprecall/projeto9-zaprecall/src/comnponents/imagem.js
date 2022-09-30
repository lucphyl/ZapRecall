import play from '../assets/img/seta_play.png';
import vira from '../assets/img/seta_virar.png';

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


}