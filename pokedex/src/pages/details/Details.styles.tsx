import styled from "styled-components";



export const Container = styled.div`
  max-width: 360px ;
  background-color: ${(props: any) => props.color};;
  width: 100%;  
  height: 100%;
  border: 1px solid #FFFFFF;
  box-shadow: 0px 8px 16px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  margin: auto auto;
  margin-top: 10%;
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

