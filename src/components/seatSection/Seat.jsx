import { useState } from "react";
import styled from "styled-components"

export default function Seat({ seat, available }) {
    const [selecionado, setSelecionado] = useState(false);
    
    function bookSeat(available){
        if(!available){
            alert("Assento indisponível");
        }
        else if(selecionado){
            setSelecionado(false);
        }
        else{
            setSelecionado(true);
        }
    }

    if (!available) {
        return (

            <Unavailable onClick={() => bookSeat(available)}>{seat}</Unavailable>

        )
    }

    return (

        <Available $selecionado={selecionado} onClick={() => bookSeat(available)}>{seat}</Available>
    )
}


const Available = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 12px;
    background-color:${({$selecionado}) => $selecionado ? '#FADBC5' : '#9DB899'};
    border: 2px solid ${({$selecionado}) => $selecionado ? '#EE897F' : '#2B2D36'};
    color: #2B2D36;
`

const Unavailable = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 12px;
    background-color: #2B2D36;
    color: #2B2D36;
`