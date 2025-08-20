import styled from "styled-components"
import { Link } from "react-router-dom"
import { useState } from "react"


export default function Time({time, showtimeId, date, weekday, setShowtime}){

    return (
        <TimeLabel to={`/assentos/${showtimeId}/${weekday}`} onClick={() => setShowtime({date, time})}>
        <span>{time}</span>
        </TimeLabel>
    )
}

const TimeLabel = styled(Link)`
    width: 84px;
    height: 41px;
    border: 2px solid #EE897F;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #EE897F;
`