import FilmBanner from "./FilmBanner";
import { Content, Label, Wrapper, Details, Carregando } from "../../sharedStyles/sharedStyle.js"
import { useEffect, useState } from "react";
import axios from 'axios'
import loading from '../../assets/load.png';

export default function Films({setFilmName}) {

    const [filmList, setFilmList] = useState(null);

    useEffect(() => {
        axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies')
            .then((response) => setFilmList(response.data))
    }, []);

    if (filmList === null) {
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
                    Em Cartaz
                </Label>
                <Wrapper>
                    {filmList.map(({ id, title, posterURL }) => <FilmBanner key={id} title={title} poster={posterURL} filmId={id} setFilmName={setFilmName} />)}
                </Wrapper>

            </Details>
        </Content>
    )
}
