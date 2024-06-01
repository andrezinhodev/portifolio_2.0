import styled from "styled-components"
import { PhotoHome } from "../PhotoHome"
import { Button } from "../Button"


const Container = styled.section ` /*Container principal*/
    width: 100%;
    min-height: 90vh;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding-block: 1rem;
    gap: 1rem;

@media screen and ( min-width:430px ) and ( max-width: 932px ) {
    display: block;
}

@media screen and ( min-width:320px ) and ( max-width: 480px ) {
  margin-bottom: 0;
}

`

const TextTitle =  styled.p ` /*Meu texto "Ola sou..."*/
    margin-left: 170px;
    color: #111;
    font-family: "Fira Code";
    font-size: 48px;
    font-weight: 700;

@media screen and ( min-width:430px ) and ( max-width: 932px ) {
   
    margin-right: 35vh;
    font-size: 45px;
    
}

@media screen and ( min-width:424px ) and ( max-width: 643px ) {
    margin: 100px;
    
}

@media screen and ( min-width:320px ) and ( max-width: 480px ) {
    padding: 0;
    margin: 0px 100px;
}
`

const TextSpan = styled.span ` /*Span "Andé oliveira..."*/
    color: #E94560;
    font-family: "Fira Code";
    font-size: 64px;
    font-weight: 700;
    
@media screen and ( min-width:430px ) and ( max-width: 932px ) {
    
    justify-content: center;
    align-items: center;
    font-size: 40px;
    
}
`

const Imagem = styled.image ` /*Imagem da tela inicial*/
    justify-content: center;
    align-items: center;
    display: flex;
    

    @media screen and ( min-width:430px ) and ( max-width: 932px ) {
    margin: 0;
    padding: 0px 5px;
    display: block;
}
    @media screen and ( min-width:424px ) and ( max-width: 643px ) {
    margin: 0;
    display: none;
    
}

@media screen and ( min-width:320px ) and ( max-width: 480px ) {
    margin: 0;
    display: none;
}


   
    
`

export const Tipografia = () => {
    return (
        <>
        <Container>
            <TextTitle>
                Olá, sou <br/>
                <TextSpan>André Oliveira</TextSpan> <br/>
                Dev Front End!
                <Button />
            </TextTitle>
            <Imagem>
                <PhotoHome />
        </Imagem>
        </Container>

        </>
    )
}