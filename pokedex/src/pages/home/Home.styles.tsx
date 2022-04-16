import styled from "styled-components";

export const DivStyled = styled.div`
  width: 104px;
  height: 130vh;
  max-width: 104px;
  max-height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #74CB48;
  box-sizing: border-box;
  border-radius: 8px;
`;

export const IdPokemon = styled.p`
  width: 104px;
  height: 16px;
  text-align: end;
  margin-right: 10px;
  font-size: 8px;
  color: #74CB48;
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

