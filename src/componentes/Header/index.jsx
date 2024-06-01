import styled from "styled-components"
import { Link } from 'react-router-dom'
import { FcHome } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";




const HeaderPage = styled.header `
    width: 100%;
    height: 50px;
    background-color: #16213E;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and ( min-width:430px ) and ( max-width: 932px ) {
    position: fixed;
    top: 0;
   
}

@media screen and ( min-width:424px ) and ( max-width: 643px ) {
    width: 105%;
    top: 0;
    
}


@media screen and ( min-width:320px ) and ( max-width: 480px ) {
    width: 105%;
    top: 0;
    position: fixed;
}

`
// const HeaderSpan = styled.span `
//     font-family: "Fira Code";
//     /* margin-left: 238px; */
//     align-items: left;
//     font-size: 1.5rem;
//     font-weight: bold;
// `

const HeaderNav = styled.nav  `
    align-items: center;

    @media screen and ( min-width:430px ) and ( max-width: 932px ) {
    font-size: 14px;
}



`
const HeaderA = styled.a `
    font-family: "Fira Code";
    align-items: center;
   
    justify-content: center;
    text-decoration: none;
    color: white;
    padding-right: 1.5rem;
    font-size: 1.125rem;
    &:hover {
        color: #E94560;
    }

    @media screen and ( min-width:430px ) and ( max-width: 932px ) {
        padding-right: 0;
        padding: 10px;
        
    }
    




`

export const Header = () => {
    return (
        <div>
            <HeaderPage>
                {/* <HeaderSpan>andre.dev</HeaderSpan> */}
                <HeaderNav>
                <Link to="/" style={{ textDecoration: "none" }}><HeaderA>Home</HeaderA></Link>
                    <Link to="/sobre" style={{ textDecoration: "none"}}><HeaderA>Sobre </HeaderA></Link>
                    <Link to="/projetos" style={{ textDecoration: "none"}}><HeaderA>Projetos</HeaderA></Link>
                    <Link to="/contatos" style={{ textDecoration: "none"}}><HeaderA>Contatos</HeaderA></Link>
                </HeaderNav>
            </HeaderPage>
        </div>
    )
}