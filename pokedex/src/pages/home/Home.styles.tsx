import styled from "styled-components";
import Vector from '../../components/imgvector/Vector.svg'

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
  max-width: 360px;
  width: 360px ;
  left: 16px;
  top: 64px;
  border: 1px solid #E0E0E0;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 4px, 8px, 4px, 8px;
  ::placeholder{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-repeat: no-repeat;
    font-family: 'Poppins', sans-serif;;
  }
  :focus {
    outline: 0;
    border-color: #aeaeb1 ; 
    padding: 10px;
  }
`;

export const IconSearch = styled.img.attrs({src: `${Vector}`})`
  height: 10px;
  width: 10px;
  position: absolute;
  top: 30%;
  left: 38%;
`;

export const InputStyled = styled.div`
  position: relative;
  top:0; right:0;
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 360px ;
  margin-bottom: 20px;
`;

