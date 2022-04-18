import { useEffect } from "react";
import { connect } from "react-redux";
import { Columns, } from "../../General.styles";
import {
Barra,
LeftDiv,
TypeOne,
ActiveP,
Pheader,
TypeTwo,
ArrowImg,
H2header,
GridInfo,
ActiveH3,
ArrowBack,
StatsText,
ActiveImg,
Container,
TypeTitle,
DivHeader,
FavlorText,
ImgPokemon,
AboutTitle,
ImgPokeball,
HeaderDetails,
DivHabilities,
BackgroundImg,
ContainerStats,
BaseStatsTitle,
DivHabilitiesBackGround,
} from './Details.styles'

import Color from "../../enum/ColorsEnum";
import pokeball from '../../components/images/pokeball/Pokeball.png'
import Peso from '../../components/images/Peso/Peso.svg'
import Regua from '../../components/images/regua/Regua.svg'
import seta from '../../components/images/Seta/Seta.svg'

const Details = ({activePokemon, dispatch}: any) => {
const colorPokemon = Color[activePokemon.typename[0]];

  return (
    <>
   <BackgroundImg>
    <Container color={Color[activePokemon.typename[0]]}>
      
    <DivHeader>
      <ImgPokeball src={pokeball} alt="pokeball"/>
      <HeaderDetails>
      <ArrowBack to="/"><ArrowImg src={seta} /></ArrowBack>
      <H2header>{activePokemon.name}</H2header>
      <Pheader> {activePokemon.url.substring(34).replaceAll('/','')< 10
                  ? `#00${activePokemon.url.substring(34).replaceAll('/','')}`
                  : activePokemon.url.substring(34).replaceAll('/','') < 100
                  ? `#0${activePokemon.url.substring(34).replaceAll('/','')}`
                  : `#${activePokemon.url.substring(34).replaceAll('/','')}`}
      </Pheader>
      </HeaderDetails>
      <ImgPokemon src={activePokemon.image} alt="" />
     
    </DivHeader>
    
      
    {/* about */}
    <ContainerStats>
    <TypeTitle>
    <TypeOne color={Color[activePokemon.typename[0]]}>{activePokemon.typename[0]}</TypeOne>
    {activePokemon.typename[1] ? <TypeTwo color={Color[activePokemon.typename[1]]}>{activePokemon.typename[1]}</TypeTwo> : ""}
    </TypeTitle>
    <div>
      <AboutTitle color={Color[activePokemon.typename[0]]} >About</AboutTitle>
      <GridInfo>
            <div>     
            <ActiveP><ActiveImg src={Peso} alt="icone de peso" />{activePokemon.weight} kg</ActiveP>
            <ActiveH3> Weight</ActiveH3>  
            </div>
            <LeftDiv>
              <div>
            <ActiveP><ActiveImg src={Regua} alt="icone de regua" />{activePokemon.height} m</ActiveP>
            <ActiveH3>Height</ActiveH3>
            </div>
            </LeftDiv>
            <LeftDiv>          
            <ActiveP>{activePokemon.moviments[0]}</ActiveP>
            <ActiveP>{activePokemon.moviments[1]}</ActiveP>
            <ActiveH3>Moves</ActiveH3>
            </LeftDiv>
        
      </GridInfo>
      <div>
        <FavlorText>{activePokemon.flavorText.replace(/\n/g, ' ').replace(/\f/g, '')}</FavlorText>
      </div>
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
      <LeftDiv>
        <div>
            <p>{activePokemon.habilities[0].base_stat}</p>
            <p>{activePokemon.habilities[1].base_stat}</p>
            <p>{activePokemon.habilities[2].base_stat}</p>
            <p>{activePokemon.habilities[3].base_stat}</p>
            <p>{activePokemon.habilities[4].base_stat}</p>
            <p>{activePokemon.habilities[5].base_stat}</p>
            </div>
      </LeftDiv>
      <Barra>
         <DivHabilitiesBackGround color={colorPokemon}>
            <DivHabilities 
              color={colorPokemon}
              percent = {`${activePokemon.habilities[0].base_stat}`}
            >
            </DivHabilities>
          </DivHabilitiesBackGround>
          <DivHabilitiesBackGround color={colorPokemon}>
            <DivHabilities 
              color={colorPokemon}
              percent = {`${activePokemon.habilities[1].base_stat}`}
            >
            </DivHabilities>
          </DivHabilitiesBackGround>
          <DivHabilitiesBackGround color={colorPokemon}>
            <DivHabilities 
              color={colorPokemon}
              percent = {`${activePokemon.habilities[2].base_stat}`}
            >
            </DivHabilities>
          </DivHabilitiesBackGround>
          <DivHabilitiesBackGround color={colorPokemon}>
            <DivHabilities 
              color={colorPokemon}
              percent = {`${activePokemon.habilities[3].base_stat}`}
            >
            </DivHabilities>
          </DivHabilitiesBackGround>
          <DivHabilitiesBackGround color={colorPokemon}>
            <DivHabilities 
              color={colorPokemon}
              percent = {`${activePokemon.habilities[4].base_stat}`}
            >
            </DivHabilities>
          </DivHabilitiesBackGround>
          <DivHabilitiesBackGround color={colorPokemon}>
            <DivHabilities 
              color={colorPokemon}
              percent = {`${activePokemon.habilities[5].base_stat}`}
            >
            </DivHabilities>
          </DivHabilitiesBackGround>
      </Barra>

    </StatsText>
    </ContainerStats>
    </Container>
    </BackgroundImg>
    </>
  )
}

const mapStateToProps = (state: any) => ({
  activePokemon: state.PokedexReducer.activePokemon,
})

export default connect(mapStateToProps)(Details);