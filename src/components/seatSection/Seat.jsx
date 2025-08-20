import { useState } from "react";
import styled from "styled-components"

export default function Seat({ seatId, seat, available, book, setBook, seatLabel, setSeatLabel }) {

    function bookSeat(seatId, seat){
        if(book.includes(seatId) && seatLabel.includes(seat)){
            setBook(book.filter(book => book !== seatId));
            setSeatLabel(seatLabel.filter(label => label !== seat));
            
        }else{
            const newBook = [...book, seatId];
            const newLabel = [...seatLabel, seat];
            setBook(newBook);
            setSeatLabel(newLabel);

        }
    }

    if (!available) {
        return (

            <Unavailable onClick={() => alert("Assento indisponível!")}>{seat}</Unavailable>

        )
    }

    return (

        <Available $select={book.includes(seatId)} onClick={() => bookSeat(seatId, seat)}>{seat}</Available>
    )
}


const Available = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 12px;
    background-color:${({$select}) => $select ? '#FADBC5' : '#9DB899'};
    border: 2px solid ${({$select}) => $select ? '#EE897F' : '#2B2D36'};
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