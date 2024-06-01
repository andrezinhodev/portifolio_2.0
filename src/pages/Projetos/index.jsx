import styled from "styled-components"
import { Header } from "../../componentes/Header"
import { Card, Card2, Card3 } from "../../componentes/Card"
import { Footer } from "../../componentes/Footer/Footer"


const TitleH1 = styled.h1 `
    color: #111;

    text-align: center;
    font-family: 'Fira Code', sans-serif;
    font-size: 30px;
    font-weight: 700;

    margin-top: 60px;
    
`

const Container = styled.section `

    justify-content: center;
    flex-direction: row;
    display: flex;
    margin-bottom: 400px;

@media screen and ( min-width:430px ) and ( max-width: 932px ) {
    margin-left: 30px;
    align-items: center;
    margin-bottom: 100px;
    display: block;
    
} 

@media screen and ( min-width:424px ) and ( max-width: 643px ) {
    display: block;
    margin-bottom: 10px;
}

@media screen and ( min-width:320px ) and ( max-width: 480px ) {
   margin: 27px;
    margin-bottom: 100px;
    display: block;
    
}
   
`



export const PageProjetos = () => {
    return (
        <>
        <Header />
        <TitleH1>Projetos</TitleH1>
        <Container>
            <Card titulo="Calculadora" descricao="Um projeto que resolve calculos matemáticos simples." />
            <Card2 titulo="Editor de texto" descricao="Um editor quase como o 'Word', mas funcional!"/>
            <Card3 titulo="Freelando" descricao="Esse projeto é um fron-end de uma pagina de cadastro, sem funcionlidade por enquanto."/>
        </Container>
        <Footer />
        </>

    )
}