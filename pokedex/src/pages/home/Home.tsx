import { url } from "inspector";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPokedex } from "../../store/actions/PokedexAction";

import { Container } from "../../General.styles";
import { DivStyled, ImgStyled, Description, IdPokemon } from "./Home.styles";
import Color from "../../enum/ColorsEnum";

const Home = ({data, dispatch}: any) => {

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
    <>
    <div>Pokedex</div>
    <Container>
        {
          data.map((e: { name: string, url: string, image: string, typename: any, principalType: any }) => (
            <DivStyled key={e.url.substring(34).replaceAll('/','')}>
              <IdPokemon>#{e.url.substring(34).replaceAll('/','')}</IdPokemon>              
              <ImgStyled src={e.image} alt={e.name}/>
              
              <Description color={getColor(e.principalType)}><p>{e.name}</p></Description>              
                 
            </DivStyled>
          )
          )
        }
    </Container>
    </>
  )
}

const mapStateToProps = (state: any) => ({
  data: state.PokedexReducer.data
})

export default connect(mapStateToProps)(Home);