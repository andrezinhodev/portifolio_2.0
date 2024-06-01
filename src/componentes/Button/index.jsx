import { Link } from "react-router-dom";
import styled from "styled-components";


const Botao = styled.button`
  width: 250px;
  height: 60px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 8px;
  background: #e94560;
  cursor: pointer;


`;

const LinkEstilizado = styled.a`
  text-decoration: none;
  color: #fff;
  font-family: "Fira Code", sans-serif;
  font-size: 18px;
  justify-content: center;
  text-align: center;
  font-weight: 700;
`;

export const Button = () => {
  return (
    <Botao>
      <Link to="/sobre" style={{ textDecoration: "none" }}>
        <LinkEstilizado>Saiba mais sobre mim</LinkEstilizado>
      </Link>
    </Botao>
  );
};
