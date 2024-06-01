// import { Footer } from "../../componentes/Footer/Footer"
import styled from "styled-components";
import { Header } from "../../componentes/Header";
import { Footer } from "../../componentes/Footer/Footer";
import { Avatar } from "../../componentes/Avatar";
import { IconeHtml } from "../../componentes/Icones/indexHtml";
import { IconeCss } from "../../componentes/Icones/indexCss";
import { IconeJs } from "../../componentes/Icones/indexJs";
import { IconeReact } from "../../componentes/Icones/indexReact";
import ReactIcon from  "./assets/ReactIcon.svg"
import JavaScript from "./assets/JavaScript.svg"
import Html from "./assets/Html.svg"
import GitHub from "./assets/GitHub.svg"
import Css from "./assets/Css.svg"
import Foto from "./assets/Foto.svg"
import './styles.css'
import { FcSettings } from "react-icons/fc";
import { FcInfo } from "react-icons/fc";




const Container = styled.section`
  width: 100%;
  min-height: 90vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding-block: 1rem;
  gap: 1rem;
  @media screen and (min-width: 430px) and (max-width: 932px) {
    display: block;
    width: 50vh;
  }

  @media screen and (min-width: 424px) and (max-width: 643px) {
    display: block;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    text-align: center;
  }
`;

const Imagem = styled.image`
  /* Minha imagem "André"*/
  align-items: center;
  display: flex;
  margin-left: 20px;

  @media screen and (min-width: 430px) and (max-width: 932px) {
    margin: 0;
    padding: 0;
    display: block;
  }

  @media screen and (min-width: 424px) and (max-width: 643px) {
    display: block;
    padding: 0;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: none;
    margin-top: 100px;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`;

const SobreH2 = styled.h2`
  font-family: "Fira Code", "sans-serif";
  font-size: 25px;
  font-weight: 700;
`;

const SobreP = styled.p`
  margin-left: 170px;
  font-family: "Fira Code";
  font-size: 20px;
  /* margin-bottom: 1rem; */
  @media screen and (min-width: 430px) and (max-width: 932px) {
    text-align: center;
    margin-top: 100px;
  }

  @media screen and (min-width: 424px) and (max-width: 643px) {
    display: block;
    margin: 50px;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    margin: 50px;
  }
`;
const SobreSpan = styled.span`
  color: #e94560;
  font-weight: 700;
`;

const SobreStrong = styled.strong`
  color: #0f3460;
  font-weight: 700;
`;
const IconeImagem = styled.image`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;

  @media screen and (min-width: 430px) and (max-width: 932px) {
    display: none;
  }

  @media screen and (min-width: 424px) and (max-width: 643px) {
    display: none;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`;
const IconeImage2 = styled.image`
  padding: 0px 60px;
`;

export const PageSobre = () => {
  return (
    <>
      <Header />
      <Container>
        <Imagem>
          <Avatar />
        </Imagem>
        <SobreP>
        <img src={Foto} alt='Minha Foto' className="my__photo"/>
          <SobreH2>Sobre <FcInfo size={20} /></SobreH2>
            
          Sou <SobreSpan>André Oliveira</SobreSpan>
          <br />
          <SobreStrong>Dev Front-End!</SobreStrong>
          <p>Trabalho com desenvolvimento Web desde 2023.</p>
          <p>Sou apaixonado por transformar ideias em realidade digital.</p>
          <p>
            Um intesiasta em criação de aplicações dinâmicas e intuitivas,{" "}
            <br />
            com foco na experiência do usuário.
          </p>
          <br />
          <div className="container__icons">
          <SobreStrong>Tecnologias <FcSettings size={18} /> </SobreStrong>
            <ul className="lista-icons">
              <li className="item__link">
                <img src={ReactIcon} alt="Icone do React Js" />
              </li>
              <li className="item__link">
                <img src={JavaScript} alt="Icone JavaScript" />
              </li>
              <li>
                <img src={GitHub} alt="Icone do Git Hub" />
              </li>
              <li className="item__link">
                <img src={Html} alt="Icone Html" />
              </li>

              <li className="item__link">
                <img src={Css} alt="Icone Css" />
              </li>
            </ul>
          </div>

        </SobreP>
      </Container>
      <IconeImagem>
        <IconeImage2>
          <IconeHtml />
        </IconeImage2>

        <IconeImage2>
          <IconeCss />
        </IconeImage2>

        <IconeImage2>
          <IconeJs />
        </IconeImage2>

        <IconeImage2>
          <IconeReact />
        </IconeImage2>
      </IconeImagem>
      <Footer />
    </>
  );
};
