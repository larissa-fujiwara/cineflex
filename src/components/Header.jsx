import styled from 'styled-components';
import imgLogo from '../assets/clapperboard.svg';

export default function Header(){
    return (
        <Logo>
        <img src={imgLogo} alt="clapperboard" />
        <h1>CineFlex</h1>
        </Logo>
    )
}

const Logo = styled.header`
    background-color:#EE897F;
    font-family: 'Raleway';
    font-weight:600;
    width: 100%;
    height: 64px;
    display: flex;
    align-items: end;
    justify-content: center;
    padding: 12px;
    position: fixed;
    left: 0;
    top: 0;
    img{
        width:40px;
        height:40px;
    }
    h1{
        color:#FADBC5;
        font-size: 32px;
        margin-left: 4px;
    }
`