import { useParams } from "react-router-dom"
import { Content, Label, Wrapper, Details, Carregando } from "../../sharedStyles/sharedStyle.js"
import Showtime from "./Showtime.jsx"
import axios from "axios"
import { useEffect, useState } from "react"
import loading from '../../assets/load.png';

export default function Showtimes() {
    const { filmId } = useParams()
    const [showtimeList, setShowtimeList] = useState(null);

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${filmId}/showtimes`)
            .then((response) => setShowtimeList(response.data))
    }, [])

    if (showtimeList === null) {
        return (
            <Content>
                <Carregando>
                    <img src={loading} alt="loading" />
                </Carregando>
            </Content>
        )
    }

    return (
        <Content>
            <Details>
                <Label>
                    Selecione o horário
                </Label>
                <Wrapper>
                    {showtimeList.days.map(({ id, weekday, date, showtimes }) => <Showtime key={id} weekday={weekday} date={date} showtimes={showtimes} />)}
                </Wrapper>
            </Details>
        </Content>
    )
}