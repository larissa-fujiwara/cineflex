import styled from "styled-components"
import {Wrapper} from "../../sharedStyles/sharedStyle.js"
import Time from "./Time.jsx"

export default function Showtime({ weekday, date, showtimes, setShowtime }) {
  

  return (
        <ShowtimeBanner>
            <p>{`${weekday}, ${date}`}</p>
            <hr/>
            <Wrapper $horario = {true}>
              {showtimes.map(({name,id}) => <Time 
              key={id} 
              time={name} 
              date={date}
              weekday={weekday} 
              showtimeId={id} 
              setShowtime={setShowtime}
              />)}
            </Wrapper>
        </ShowtimeBanner>
    )
}

const ShowtimeBanner = styled.div`
  width: 338px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #2B2D36;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  gap:16px;
  p{
    font-size: 1.25rem;
    color:white;
  }
  hr{
    width:100%;
    border: 1px solid #4E5A65;
  }
  @media (max-width:380px){
    width: 80%;
  }
`