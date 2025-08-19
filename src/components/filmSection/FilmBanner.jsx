import { Link } from "react-router-dom"
import styled from "styled-components"

export default function FilmBanner({poster, title, filmId}){
    return (
        <Banner to={`/horarios/${filmId}/${title}`}>
            <img onClick={() => console.log(title)} src={poster} alt={title} />
        </Banner>
    )
}

const Banner = styled(Link)`
    img{
    width:145px;
    height:210px;
    border-radius: 8px;
}
`