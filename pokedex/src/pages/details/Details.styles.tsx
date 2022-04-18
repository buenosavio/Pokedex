import { Link } from "react-router-dom";
import styled from "styled-components";
import Backgroundd from '../../components/images/background/BackgrundHome.png'


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
  padding: 4px;
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
  height: 20px;
  padding: 20px;
  color: #fff;
  text-transform: capitalize;
`;

export const ContainerStats = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  background-size: auto 30px;
  border-radius: 8px;
  margin: 110px 0px 0px 0px;
 // padding: 100px 20px 20px 20px;
`;

export const ImgPokeball = styled.img`
  width: 208px;
  margin: 5px 0px 0px 190px;
  position: absolute;
  z-index: 1;
  text-align: center;
`;

export const ImgPokemon = styled.img`
  position: absolute;
  width: 200px;
  height: 200px;
  margin: 0px 0px 0px 100px;
  z-index: 100;
`;

export const DivHeader = styled.div`
height: 110px;
`;

export const H2header = styled.h2`
margin: -9px 0px 0px -130px;
`;
export const Pheader = styled.p`
margin: -1px 0px 0px 0px;
`;

//Styled card about Info
export const GridInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  font-size: 10px;
`;
export const LeftDiv = styled.div`
border-left: 1px solid #e0e0e0;
margin: 0px ;
`;

export const ActiveP = styled.p`
height: 16px;
margin: 10px 0px 10px 8px ;
font-size: 12px;
line-height: 16px;
`;

export const ActiveH3 = styled.h3`
text-align: center;
`;

export const ActiveImg = styled.img`
margin-right: 10px;
`;


export const StatsText = styled.div`
    color: black;
    display: flex;
    gap: 10px;
    justify-content: center;

`;

export const Barra = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 22px;
`;

export const DivHabilitiesBackGround = styled.div<{color: string}>`
    background-color: ${(props: any) => props.color}50;
    width: 248px;
    height: 10px;
    margin-bottom: 30px;
`;

export const DivHabilities = styled.div<{ percent: any, color: string}>`
    background-color: ${(props: any) => props.color};
    width: ${(props: any) => (props.percent)}%;
    max-width: 100%;
    height: 10px;
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
  margin-top: 20px;
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

export const BackgroundImg = styled.div`
  background-image: url(${Backgroundd});
  width: 100%;
  height: 100%;
  margin-top: -15px;
`;


export const FavlorText = styled.p`
height: 32px;
width: 90%;
font-size: 12px;
font-weight: 400;
line-height: 16px;
letter-spacing: 0em;
text-align: center;
margin: 16px 20px 10px ;
`;


