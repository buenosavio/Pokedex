import { Link } from "react-router-dom";
import styled from "styled-components";



export const Container = styled.div`
  max-width: 400px ;
  background-color: ${(props: any) => props.color};;
  width: 100%;  
  height: 100%;
  border: 1px solid #FFFFFF;
  box-shadow: 0px 8px 16px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  margin: auto auto;
  margin-top: 1%;
  padding: 10px;
`;



export const IdPokemon = styled.p`
  width: 104px;
  height: 16px;
  text-align: end;
  margin-right: 10px;
  font-size: 8px;
  color: ${(props: any) => props.color};;
`;

export const HeaderDetails = styled.header`
  display: flex;
  justify-content: space-between;
  height: 70px;
  padding: 20px;
  color: #fff;
  text-transform: capitalize;
`;

export const ContainerStats = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  padding: 100px 20px 20px 20px;
`;

export const ImgPokeball = styled.img`
  width: 208px;
  margin-left: 144px;
  position: absolute;
  z-index: 1;
  text-align: center;
`;

export const ImgPokemon = styled.img`
  position: absolute;
  max-width: 200px;
  margin-left:calc(290px/2);
  z-index: 100;
`;


export const GridInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  padding: 15px 0;
`

export const StatsText = styled.div`
    color: black;
    display: flex;
    gap: 10px;
    justify-content: center;
`;

export const Barra = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
`;


export const DivHabilities = styled.div<{ percent: any, color: string}>`
    background-image: linear-gradient(to right, color = ${(props: any) => props.color}, ${(props: any) => (props.percent)}%);
    width: 248px;
    height: 10px;
    margin-bottom: 15px;
`;

export const ArrowBack = styled(Link)`
color: #FFF;


`;

export const ArrowImg = styled.img`
  color: #FFF;
  height: 17.297962188720703px;
width: 17.499988555908203px;
left: 3.25px;
top: 7.35107421875px;
border-radius: 0px;
`;

export const AboutTitle = styled.h1`
left: 0px;
top: 0px;
font-family: Poppins;
font-size: 20px;
font-weight: 700;
line-height: 16px;
letter-spacing: 0em;
text-align: center;
color: ${(props: any) => props.color};
`;


export const BaseStatsTitle = styled.h3`
font-size: 14px;
line-height: 16px;
letter-spacing: 0em;
text-align: center;
left: 0px;
top: 0px;
color: ${(props: any) => props.color};
`;

export const TypeTitle = styled.div`
  color: ${(props: any) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35%;
`;

export const TypeOne = styled.h3`
  width: 90px;
  height: 20px;
  margin: 30px 15px 0;
  border-radius: 10px;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  background-color: ${(props: any) => props.color};;
`;

export const TypeTwo = styled.h3`
width: 90px;
  height: 20px;
  margin: 30px 15px 0;
  border-radius: 10px;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  background-color: ${(props: any) => props.color};;
`;



