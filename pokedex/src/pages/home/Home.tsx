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

  const getColor = (id: string) => {
    if (id === 'normal') {
      return Color.normal
    } else if (id === 'fighting') {
      return Color.fighting
    } else if (id === 'flying') {
      return Color.flying
    } else if (id === 'poison') {
      return Color.poison
    } else if (id === 'ground') {
      return Color.ground
    } else if (id === 'rock') {
      return Color.rock
    } else if (id === 'bug') {
      return Color.bug
    } else if (id === 'ghost') {
      return Color.ghost
    } else if (id === 'steel') {
      return Color.steel
    } else if (id === 'fire') {
      return Color.fire
    } else if (id === 'water') {
      return Color.water
    } else if (id === 'grass') {
      return Color.grass
    } else if (id === 'electric') {
      return Color.electric
    } else if (id === 'psychic') {
      return Color.psychic
    } else if (id === 'ice') {
      return Color.ice
    } else if (id === 'dragon') {
      return Color.dragon
    } else if (id === 'dark') {
      return Color.dark
    } else if (id === 'fairy') {
      return Color.fairy
    } else {
      return Color.normal
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