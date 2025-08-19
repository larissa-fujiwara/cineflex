import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Time({name, showtimeId, weekday}){
    
    return (
        <TimeLabel to={`/assentos/${showtimeId}/${weekday}`}>
        <span>{name}</span>
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