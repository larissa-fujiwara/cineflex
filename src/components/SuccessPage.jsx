import styled from "styled-components"
import { Content, Label, Details } from "../sharedStyles/sharedStyle"
import { Link } from "react-router-dom"

export default function SuccessPage({ filmName, showtime, buyerData, seatsInfo, setFilmName, setShowtime, setBuyerData, setSeatsInfo}) {
    
    function limpaEstados(){
        setFilmName('');
        setShowtime({});
        setBuyerData({});
        setSeatsInfo([]);
    }
    
    return (
        <Content>
            <Details>
                <Label $finalizado={true}>
                    Pedido finalizado!
                </Label>
                <TicketsInfo>
                    <BookDetails>
                        <h3>Filme e Sessão</h3>
                        <hr />
                        <p>{filmName}</p>
                        <p>{`${showtime.date} às ${showtime.time}`}</p>
                    </BookDetails>

                    <BookDetails>
                        <h3>Ingressos</h3>
                        <hr />
                        <ul>
                            {seatsInfo.map(seat => <li key={seat}>Assento {seat}</li>)}
                        </ul>
                    </BookDetails>

                    <BookDetails>
                        <h3>Comprador</h3>
                        <hr />
                        <p>Nome: {buyerData.name}</p>
                        <p>CPF: {buyerData.cpf}</p>
                    </BookDetails>
                </TicketsInfo>
                <HomePage onClick={limpaEstados} to='/' >Voltar para tela inicial</HomePage>
            </Details>
        </Content>
    )
}

const TicketsInfo = styled.section`
    width: 90%;
    background-color: #2B2D36;
    border-radius: 8px;
    padding: 8px;
`
const BookDetails = styled.div`
    margin-bottom: 16px;
    margin-top: 16px;
    h3{
        font-size: 1.4rem;
        color: #EE897F;
    }
    p{
        font-size: 1.25rem;
        color: #FFFFFF;
        margin-top: 12px;
        margin-bottom:16px;
    }
    hr{
        border: 1px solid #4E5A65;
        margin-bottom: 12px;
    }
    ul{
        font-size: 1.25rem;
        color:#FFFFFF;
    }
    li{
        margin-bottom: 16px;
    }
`

const HomePage = styled(Link)`
    text-decoration: none;
    font-size: 1.12rem;
    font-weight: bold;
    width: 90%;
    padding: 16px;
    background-color: #EE897F;
    color:#2B2D36;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
`