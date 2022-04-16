import { url } from "inspector";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPokedex } from "../../store/actions/PokedexAction";
import { AiOutlineSearch, AiOutlineSortAscending } from "react-icons/ai";

import { Container, Columns, ContainerGeral } from "../../General.styles";
import { 
DivStyled, 
ImgStyled, 
IdPokemon,
InputSearch,
Description, 
TitlePokedex, 
HeaderContainer,
} from "./Home.styles";
import Color from "../../enum/ColorsEnum";

const Home = ({data, dispatch}: any) => {

  const [search, setSearch] = useState("")

  useEffect(()=>{
    getPokedex(dispatch)
  },[])

  console.log('home', data)

  const getColor = (id: string) => {
    console.log("oq chegou no id", id)
    if (id === 'normal') {
      return Color.normal
    } else if (id === 'fighting') {
      return Color.fighting
    } else if (id === 'flying') {
      return Color.flying
    } else {
      return Color.grass
    }
  }
  
  return (
    <ContainerGeral>
    <Container>

    <HeaderContainer>
    <TitlePokedex>Pokédex <AiOutlineSortAscending/></TitlePokedex>
    <InputSearch
    type="text" 
    placeholder= "Procurar"
    onChange={(e) => setSearch(e.target.value)}
    />
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
          }
        })
          .map((e: { name: string, url: string, image: string, typename: any, principalType: any }) => (
            <DivStyled key={e.url.substring(34).replaceAll('/','')}>
              <IdPokemon>#{e.url.substring(34).replaceAll('/','')}</IdPokemon>              
              <ImgStyled src={e.image} alt={e.name}/>
              
              <Description color={getColor(e.principalType)}><p>{e.name}</p></Description>              
                 
            </DivStyled>
          )
          )
        }
        </Columns>
    </Container>
    </ContainerGeral>
  )
}

const mapStateToProps = (state: any) => ({
  data: state.PokedexReducer.data
})

export default connect(mapStateToProps)(Home);