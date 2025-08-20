import styled from "styled-components"
import { Content, Label, Details } from "../sharedStyles/sharedStyle"

export default function SuccessPage({ filmName, showtime, bookInfo }) {
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
                        <p>assentos</p>
                    </BookDetails>

                    <BookDetails>
                        <h3>Comprador</h3>
                        <hr />
                        <p>Nome</p>
                        <p>CPF</p>
                    </BookDetails>
                </TicketsInfo>
                <button>AAA</button>
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
    }
`