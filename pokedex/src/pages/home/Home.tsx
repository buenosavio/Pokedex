import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { getPokedex, handlePokemon } from "../../store/actions/PokedexAction";
import { Container, Columns, LinkStyled } from "../../General.styles";
import { 
  DivStyled, 
  ImgStyled, 
  IdPokemon,
  IconSearch,
  InputStyled, 
  Description, 
  InputSearch,
  HeaderContainer
} from "./Home.styles";   

import Color from "../../enum/ColorsEnum";
import Header from "../../components/header/Header";

const Home = ({data, dispatch}: any) => {

  const [search, setSearch] = useState("")

  useEffect(()=>{
    getPokedex(dispatch)
  },[])
  return (
    <Container>
      <HeaderContainer>
       <Header />
        <InputStyled>
          <InputSearch type="text" placeholder= "Procurar" onChange={(e) => setSearch(e.target.value)}/>
          {(search) ? null : <IconSearch/> }               
        </InputStyled>
      </HeaderContainer>
      <Columns>
        { 
          data.filter((value:any) =>{
          if(search === ""){
            return(value)
          }else if(value.name.toLowerCase().includes(search.toLowerCase())){
            return (value)
          } else if (value.url.substring(34).replaceAll('/','').includes(search.toLowerCase())){
            return (value)
          }})

          .map((e: { name: string, url: string, image: string, typename: any, principalType: any }) => (            
            <LinkStyled onClick={() => handlePokemon(e, dispatch)} to={'/detail'}>
              <DivStyled color={Color[e.principalType]} key={e.url.substring(34).replaceAll('/','')}>
                <IdPokemon color={Color[e.principalType]} >#{e.url.substring(34).replaceAll('/','')}</IdPokemon>              
                <ImgStyled src={e.image} alt={e.name}/>                         
                <Description color={Color[e.principalType]}>{e.name.charAt(0).toUpperCase() + e.name.substr(1)}</Description>                
              </DivStyled>        
            </LinkStyled>
          ))
        }
        </Columns>
    </Container>
  )
}

const mapStateToProps = (state: any) => ({
  data: state.PokedexReducer.data,
  activePokemon: state.PokedexReducer.activePokemon
})

export default connect(mapStateToProps)(Home);