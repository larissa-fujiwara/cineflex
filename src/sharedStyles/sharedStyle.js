import styled from "styled-components";

export const Content = styled.main`
background-color: #212226;
font-family: 'Sarala';
height: calc(100vh - 64px);
display: flex;
justify-content: center;
margin-top: 64px;
overflow-y:auto;
`;

export const Label = styled.h2`
        padding-top: 28px;
        padding-bottom: 28px;
        font-size: 1.5rem;
        color: ${({$finalizado}) => $finalizado ? '#9DB899' : '#FFFF'}
`;

export const Wrapper = styled.div`
    width:100%;
    gap: 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: ${({$horario}) => $horario ? 'flex-start' : 'center'};
`
export const Details = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Carregando = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`