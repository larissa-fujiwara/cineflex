import styled from "styled-components"
import { Content, Label, Details } from "../sharedStyles/sharedStyle"

export default function SuccessPage() {
    return (
        <Content>
            <Details>
                <Label $finalizado={true}>
                    Pedido finalizado!
                </Label>
                <div>
                    <p>Filme e Sessão</p>
                    <p>Homem Aranha</p>
                    <p>Data</p>
                    <hr />
                    <p>Ingressos</p>
                    <p>assentos</p>
                    <hr />
                    <p>Comprador</p>
                    Nome
                    CPF
                    <hr />
                </div>
                <button>AAA</button>
            </Details>
        </Content>
    )
}

