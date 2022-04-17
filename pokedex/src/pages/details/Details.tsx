import { useEffect } from "react";
import { connect } from "react-redux";
import { Columns, } from "../../General.styles";
import {
Barra,
LeftDiv,
TypeOne,
TypeTwo,
ArrowImg,
GridInfo,
ArrowBack,
StatsText,
Container,
TypeTitle,
PokemonInfos,
ImgPokemon,
AboutTitle,
ImgPokeball,
HeaderDetails,
DivHabilities,
ContainerStats,
BaseStatsTitle,
DivHabilitiesBackGround,
} from './Details.styles'

import Color from "../../enum/ColorsEnum";
import pokeball from '../../components/images/pokeball/Pokeball.png'
import seta from '../../components/images/Seta/Seta.svg'

const Details = ({activePokemon, dispatch}: any) => {
const colorPokemon = Color[activePokemon.typename[0]];

  return (
    <>
    <Container color={Color[activePokemon.typename[0]]}>
      
    <div style={{height: "110px"}}>
      <ImgPokeball src={pokeball} alt="pokeball"/>
      <HeaderDetails>
      <ArrowBack to="/"><ArrowImg src={seta} /></ArrowBack>
      <h2 style={{margin: "-9px 0px 0px -130px"}}>{activePokemon.name}</h2>
      <p style={{margin: "-1px 0px 0px 0px"}}> {activePokemon.url.substring(34).replaceAll('/','')< 10
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
    {activePokemon.typename[1] ? <TypeTwo color={Color[activePokemon.typename[1]]}>{activePokemon.typename[1]}</TypeTwo> : ""}
    </TypeTitle>
    <div>
      <AboutTitle color={Color[activePokemon.typename[0]]} >About</AboutTitle>
      <GridInfo>
            <div>     
            <p>{activePokemon.weight} kg</p>
            <h3> Weight</h3>  
            </div>
            <LeftDiv>
              <div>
            <p>{activePokemon.height} m</p>
            <h3>Height</h3>
            </div>
            </LeftDiv>
            <LeftDiv>          
            <p>{activePokemon.moviments[0]}</p>
            <p>{activePokemon.moviments[1]}</p>
            <h3>Moves</h3>
            </LeftDiv>
        
      </GridInfo>
      <div>
        <p>{activePokemon.flavorText.replace(/\n/g, ' ').replace(/\f/g, '')}</p>
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
        {/* {activePokemon.habilities.map((item: any) => {
           <DivHabilitiesBackGround  
           color={colorPokemon} 
           percent = {`${item.base_stat}`} 
          >
            <DivHabilities 
              color={colorPokemon}
              percent = {`${item.base_stat}`}
            >
            </DivHabilities>
          </DivHabilitiesBackGround>
        })} */}
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
    </>
  )
}

const mapStateToProps = (state: any) => ({
  activePokemon: state.PokedexReducer.activePokemon,
})

export default connect(mapStateToProps)(Details);