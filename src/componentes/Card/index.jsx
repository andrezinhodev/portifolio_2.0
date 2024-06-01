import styled from "styled-components"
import { FcApproval } from "react-icons/fc";
import { FcCalculator } from "react-icons/fc";
import { FcSignature } from "react-icons/fc";
import { FcBusiness } from "react-icons/fc";



 
const ContainerCard = styled.section `
    width: 300px;
    height: 300px;
    margin: 53px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    background-color: #F1F1F1;
    color: gray;
    border-radius: 8px;
    box-shadow: 5px 5px 10px #22222270;
    
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media screen and ( min-width:320px ) and ( max-width: 480px ) {
    margin: 10px;
    margin-bottom: 10px;
    display: block;
    
}
    
` 
const CardH3 = styled.h3 `
    color: #0F3460;


`
const CardP = styled.p `
    color: #555;
`
const CardButton = styled.button `
    border: 0;
    font-size: 1.5rem;
    cursor: pointer;

` 
const CardA = styled.a `
    text-decoration: none;
    color: #0F3460;


`


export const Card = ({ titulo, descricao }) => {
    return (
        <>
            <ContainerCard>     
                <CardH3>{ titulo } <FcCalculator /></CardH3>
                <CardP>{ descricao }</CardP>
                <CardButton>
                <CardA href="https://calculator-five-alpha-75.vercel.app/" target="_blank"><FcApproval size={"40"} /></CardA>
                </CardButton>
            </ContainerCard> 

        </>
    )
}

export const Card2 = ({ titulo, descricao }) => {
    return (
        <>
            <ContainerCard>     
                <CardH3>{ titulo } <FcSignature /></CardH3>
                <CardP>{ descricao }</CardP>
                <CardButton>
                <CardA href="https://editor-de-texto-lac.vercel.app/" target="_blank"><FcApproval size={"40"} /></CardA>
                </CardButton>
            </ContainerCard> 

        </>
    )
}

export const Card3 = ({ titulo, descricao }) => {
    return (
        <>
            <ContainerCard>     
                <CardH3>{ titulo } <FcBusiness /></CardH3>
                <CardP>{ descricao }</CardP>
                <CardButton>
                <CardA href="https://freelando-eta.vercel.app/" target="_blank"><FcApproval size={"40"} /></CardA>
                </CardButton>
            </ContainerCard> 

        </>
    )
}