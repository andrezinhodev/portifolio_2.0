import styled from "styled-components"
import { Header } from "../../componentes/Header"
import { Footer } from "../../componentes/Footer/Footer"
import { IconeEmail } from "../../componentes/Icones/indexEmail"
import { IconeInstagram } from "../../componentes/Icones/indexInstagram"
import { IconeGit } from "../../componentes/Icones/indexGitHub"
import { IconeLinkedin } from "../../componentes/Icones/indexLinkedin"
import { IconeWhats } from "../../componentes/Icones/indexWhats"





const Container = styled.section `
    width: 100%;
    min-height: 90vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`


const ContatosH2 = styled.h2 `
    color: #111;
    text-align: center;
    font-family: 'Fira Code', sans-serif;
    font-size: 32px;
    font-weight: 700;

@media screen and ( min-width:430px ) and ( max-width: 932px ) {
    font-size: 25px;
    
}

@media screen and ( min-width:424px ) and ( max-width: 643px ) {
    font-size: 22px;
}
@media screen and ( min-width:320px ) and ( max-width: 480px ) {
   font-size: 20px;
    
}
`
const ContatosP = styled.p `
    color: #111;
    text-align: center;
    font-family: 'Fira Code', sans-serif;
    font-size: 24px;
    font-weight: 700;

@media screen and ( min-width:430px ) and ( max-width: 932px ) {
    font-size: 20px;
   
    
}
@media screen and ( min-width:424px ) and ( max-width: 643px ) {
    font-size: 16px;
    
}

@media screen and ( min-width:320px ) and ( max-width: 480px ) {
    
    font-size: 20px;
    
}
`

const DivIcones = styled.div `
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-block: 3rem;


@media screen and ( min-width:320px ) and ( max-width: 480px ) {
    width: 90%;
} 
`


export const PageContato = () => {
    return (
        <>
            <Header />
            <Container>

                <ContatosH2>Contatos:</ContatosH2>
                <ContatosH2>Entre em contato:</ContatosH2>
          
                <ContatosP>Para que possamos conversar mais sobre</ContatosP>
                <DivIcones>
                    <a href="mailto:andredev426@gmail.com?subject=Fale+mais+sobre+voc%C3%AA.&body=Ol%C3%A1+Andr%C3%A9!+Como+posso+contata-lo?" target="_blank">
                        <IconeEmail />
                    </a>

                    <a href="https://www.instagram.com/andregttr/" target="_blank">
                        <IconeInstagram />
                    </a>

                    <a href="https://github.com/andrezinhodev" target="_blank">
                        <IconeGit />
                    </a>

                    <a href="https://www.linkedin.com/in/andr%C3%A9-oliveira-a20393261/" target="_blank">
                        <IconeLinkedin />
                    </a>

                    <a href="https://api.whatsapp.com/send?phone=5535997086432&text=Ol%C3%A1%20Andr%C3%A9%20Dev!%20%0AGostaria%20de%20contratar%20os%20seus%20servi%C3%A7os!%20:)">
                        <IconeWhats />
                    </a>
                </DivIcones>

            </Container>
            <Footer />
        </>
    )
}