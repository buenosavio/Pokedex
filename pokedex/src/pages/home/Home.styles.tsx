import styled from "styled-components";
import Vector from '../../images/Vector.png'

export const DivStyled = styled.div`
  width: 104px;
  height: 130vh;
  max-width: 104px;
  max-height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${(props: any) => props.color};;
  box-sizing: border-box;
  border-radius: 8px;
`;

export const IdPokemon = styled.p`
  width: 104px;
  height: 16px;
  text-align: end;
  margin-right: 10px;
  font-size: 8px;
  color: ${(props: any) => props.color};;
`;

export const ImgStyled = styled.img`
  height: 72px;
  width: 72px;
  padding-bottom: 5px;
  max-height: 72px;
  max-width: 72px;
`;

export const Description = styled.p`
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 104px;
  height: 24px;
  max-height: 24px;
  margin:0px!important;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: ${(props: any) => props.color};
  color: white;
`;

export const InputSearch = styled.input`
height: 24px;
width: 328px;
left: 16px;
top: 64px;
border-radius: 8px;
padding: 4px, 8px, 4px, 8px;


::placeholder{
  text-align: center;
  background-image: url(${Vector});
  background-repeat: no-repeat;
}
`;


export const HeaderContainer = styled.header`
  display: grid;
  margin: 5px 5px 5px 5px;
`;

export const TitlePokedex = styled.h1`
font-family: Poppins;
font-size: 24px;
font-weight: 700;
line-height: 32px;
letter-spacing: 0em;
text-align: left;
color: rgba(33, 33, 33, 1);
;
`;