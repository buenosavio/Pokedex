import { useEffect } from "react";
import { connect } from "react-redux";
import { Columns, } from "../../General.styles";
import {
GridInfo,
Container,
ImgPokemon,
ImgPokeball,
HeaderDetails,
ContainerStats,
} from './Details.styles'

import Color from "../../enum/ColorsEnum";
import pokeball from '../../components/images/pokeball/Pokeball.png'

const Details = ({activePokemon, dispatch}: any) => {

  return (
    <>
    <Container color={Color[activePokemon.typename[0]]}>
      <ImgPokeball src={pokeball} alt="pokeball"/>
    <div>
      <HeaderDetails>
      <h1>{activePokemon.name}</h1>
      <p>#{activePokemon.url.substring(34).replaceAll('/','')}</p>
      </HeaderDetails>
      <ImgPokemon src={activePokemon.image} alt="" />
      <p>{activePokemon.typename[0]}</p>
      <p>{activePokemon.typename[1]}</p>
    </div>
      
    {/* about */}
    <ContainerStats>
    <div>
      <h1 >About</h1>
      <GridInfo>
            <div>     
            <p>{activePokemon.weight}kg</p>
            <h3> Weight:</h3>  
            </div>
            <div>
            <p>{activePokemon.height}m</p>
            <h3>Height:</h3>
            </div>
            <div>          
            <p>{activePokemon.moviments[0]}</p>
            <p>{activePokemon.moviments[1]}</p>
            <h3> Moves:</h3>
            </div>
        
      </GridInfo>
    </div>

    {/* stats */}
    <div>
      <h1>Base Stats</h1>
      <p>HP: {activePokemon.habilities[0].base_stat}</p>
      <p>Attack: {activePokemon.habilities[1].base_stat}</p>
      <p>Defense: {activePokemon.habilities[2].base_stat}</p>
      <p>Special-Attack: {activePokemon.habilities[3].base_stat}</p>
      <p>Special-Defense: {activePokemon.habilities[4].base_stat}</p>
      <p>Speed: {activePokemon.habilities[5].base_stat}</p>
    </div>
    </ContainerStats>
    </Container>
    </>
  )
}

const mapStateToProps = (state: any) => ({
  activePokemon: state.PokedexReducer.activePokemon,
})

export default connect(mapStateToProps)(Details);