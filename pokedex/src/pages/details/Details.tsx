import { useEffect } from "react";
import { connect } from "react-redux";
import { Columns, } from "../../General.styles";
import {
Barra,
TypeOne,
TypeTwo,
ArrowImg,
GridInfo,
ArrowBack,
StatsText,
Container,
TypeTitle,
ImgPokemon,
AboutTitle,
ImgPokeball,
HeaderDetails,
DivHabilities,
ContainerStats,
BaseStatsTitle,
} from './Details.styles'

import Color from "../../enum/ColorsEnum";
import pokeball from '../../components/images/pokeball/Pokeball.png'
import seta from '../../components/images/Seta/Seta.svg'

const Details = ({activePokemon, dispatch}: any) => {

  return (
    <>
    <Container color={Color[activePokemon.typename[0]]}>
      <ImgPokeball src={pokeball} alt="pokeball"/>
    <div>
      <HeaderDetails>
      <ArrowBack to="/"><ArrowImg src={seta} /></ArrowBack>
      <h1>{activePokemon.name}</h1>
      <p> {activePokemon.url.substring(34).replaceAll('/','')< 10
                  ? `#00${activePokemon.url.substring(34).replaceAll('/','')}`
                  : activePokemon.url.substring(34).replaceAll('/','') < 100
                  ? `#0${activePokemon.url.substring(34).replaceAll('/','')}`
                  : `#${activePokemon.url.substring(34).replaceAll('/','')}`}
      </p>
      </HeaderDetails>
      <ImgPokemon src={activePokemon.image} alt="" />
     
    </div>
    
      
    {/* about */}
    <ContainerStats>
    <TypeTitle>
    <TypeOne color={Color[activePokemon.typename[0]]}>{activePokemon.typename[0]}</TypeOne>
    <TypeTwo color={Color[activePokemon.typename[1]]}>{activePokemon.typename[1]}</TypeTwo>
    </TypeTitle>
    <div>
      <AboutTitle color={Color[activePokemon.typename[0]]} >About</AboutTitle>
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
    <BaseStatsTitle color={Color[activePokemon.typename[0]]}>Base Stats</BaseStatsTitle>
    <StatsText>
      <div>
    <p>HP</p>
    <p>ATK</p>
    <p>DEF</p>
    <p>SATK</p>
    <p>SDEF</p>
    <p>SPD</p>
    </div>
      <div>
            <p>{activePokemon.habilities[0].base_stat}</p>
            <p>{activePokemon.habilities[1].base_stat}</p>
            <p>{activePokemon.habilities[2].base_stat}</p>
            <p>{activePokemon.habilities[3].base_stat}</p>
            <p>{activePokemon.habilities[4].base_stat}</p>
            <p>{activePokemon.habilities[5].base_stat}</p>
      </div>
      <Barra>
      <DivHabilities 
        color={Color[activePokemon.typename[0]]}
        percent = {`${activePokemon.habilities[0].base_stat}`}
        ></DivHabilities>
      </Barra>

    </StatsText>
    </ContainerStats>
    </Container>
    </>
  )
}

const mapStateToProps = (state: any) => ({
  activePokemon: state.PokedexReducer.activePokemon,
})

export default connect(mapStateToProps)(Details);