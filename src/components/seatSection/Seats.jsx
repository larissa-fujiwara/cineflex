import styled from "styled-components"
import { Content, Label, Details, Carregando } from "../../sharedStyles/sharedStyle.js"
import Seat from "./Seat.jsx"
import loading from "../../assets/load.png"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from 'axios'

export default function Seats() {

    const { showtimeId } = useParams();
    const [seatsList, setSeatsList] = useState(null);
    const [book, setBook] = useState([]);
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${showtimeId}/seats`)
            .then((response) => setSeatsList(response.data))
            .catch(() => console.log('erro'))
    }, [])

    if (seatsList === null) {
        return (
            <Content>
                <Carregando>
                    <img src={loading} alt="loading" />
                </Carregando>
            </Content>
        )
    }

    function Teste(event) {
        event.preventDefault()

        if (book.length === 0) {
            alert("Selecione os assentos desejados!");
        } else {
            const body = {
                ids: book,
                name,
                cpf
            }

            console.log(body);

            return body;
        }
    }

    console.log(book);
    return (
        <Content>
            <Details>
                <Label>
                    Selecione o(s) assento(s)
                </Label>
                <SeatDisplay>
                    <SeatContainer>
                        {seatsList.seats.map(({ id, name, isAvailable }) => <Seat key={id} seatId={id} seat={name} available={isAvailable} book={book} setBook={setBook} />)}
                    </SeatContainer>
                </SeatDisplay>
                <CustomerData onSubmit={Teste}>
                    <hr />
                    <DataInput>

                        <label htmlFor='nome'>Nome do comprador(a)</label>
                        <Input 
                        required 
                        id='nome' 
                        name='nome' 
                        type="text"
                        placeholder="Digite o nome completo" />

                        <label htmlFor='cpf'>CPF do comprador(a)</label>
                        <Input
                            required
                            id='cpf'
                            name='cpf'
                            type="text"
                            placeholder="Digite o CPF"
                            pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"
                            onChange={e => setCpf(e.target.value.replace(/[.\-]/g, ""))}
                            onInvalid={(e) => e.target.setCustomValidity("Digite um CPF válido no formato 000.000.000-00")}
                            onInput={(e) => e.target.setCustomValidity("")} />

                    </DataInput>
                    <BookSeats type="submit" to='/finalizado'>Reservar assento(s)</BookSeats>
                </CustomerData>

            </Details>
        </Content>
    )
}

const SeatDisplay = styled.div`
    width: 100%;
    display: flex; 
    justify-content: center;
    `

const SeatContainer = styled.div`
    font-family: 'Roboto';
    width: 375px;
    padding-left: 8px;
    padding-right: 8px;
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    row-gap: 12px;
    column-gap: 10px; 
`
const CustomerData = styled.form`
    width: 90%;
    display: flex;
    flex-direction:column;
    align-items: center;
    hr{
        margin-top: 24px;
        margin-bottom: 24px;
        width: 100%;
        border: 1px solid #4E5A65;
    }
`

const DataInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    label{
        color: #FFFFFF;
        margin-bottom: 4px;
    }
`

const Input = styled.input`
    margin-bottom: 16px;
    height: 40px;
    border-radius: 8px;
    &::placeholder{
        font-family: 'Roboto';
        font-style: italic;
        padding-left: 4px;
    }
`

const BookSeats = styled.button`
    margin-top: 4px;
    display: flex;
    height: 42px;
    font-weight: bold;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    background-color: #EE897F;
    text-decoration: none;
    color: #2B2D36;
    width: 100%;
`