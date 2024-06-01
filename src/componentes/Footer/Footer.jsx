import styled from "styled-components"

const Container = styled.footer  `
    width: 100%;
    height: 50px;
    background-color: #16213E;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;

@media screen and ( min-width:430px ) and ( max-width: 932px ) {
    width: 105%;
    top: 0;
    
}

@media screen and ( min-width:424px ) and ( max-width: 643px ) {
    width: 100%;
}

@media screen and ( min-width:320px ) and ( max-width: 480px ) {
    width: 100%;
    bottom: 0;
    position: fixed;
}
`

const FooterP = styled.p `
font-family: "Fira Code";
    font-size: 18px;
    font-weight: 700;
`
    const FooterSpan = styled.span `
    font-family: "Fira Code";
    font-size: 1.5rem;
    font-weight: bold;

`





export const Footer = () => {
    return (
            <Container>
                <FooterP>Feito com <FooterSpan>❤️</FooterSpan> por Andre Dev!</FooterP>
            </Container>
    )
}