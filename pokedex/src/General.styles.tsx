import { Link } from "react-router-dom";
import styled from "styled-components";
import background from './images/background.png'


export const ContainerGeral = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  margin-top: -153px;
`;

export const Container = styled.div`
  max-width: 360px ;
  background-color: #F7F7F7;
  width: 100%;  
  height: 100%;
  border: 1px solid #FFFFFF;
  box-shadow: 0px 8px 16px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  margin: auto auto;
  margin-top: 10%;
  margin-bottom: 10%;
  padding: 10px;
`;

export const Columns = styled.div`
display: grid;  
  grid-template-columns:auto auto auto;
  margin: auto auto;
  row-gap: 20px;
  column-gap: 20px;
`;


export const LinkStyled = styled(Link)`
  text-decoration: none;
`