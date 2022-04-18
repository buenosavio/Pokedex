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
import { connect } from "react-redux";
import Color from "../../enum/ColorsEnum";
import HabilitiesEnum from "../../enum/HabilitiesEnum";
import pokeball from '../../components/images/pokeball/Pokeball.png'
import Peso from '../../components/images/Peso/Peso.svg'
import Regua from '../../components/images/regua/Regua.svg'
import seta from '../../components/images/Seta/Seta.svg'
import GetIdPokemon from "../../Utils/GetIdPokemon";

const Details = ({activePokemon}: any) => {

const colorPokemon = Color[activePokemon.principalType];
  return (
  <>
   <BackgroundImg>
    <Container color={colorPokemon}>
      <DivHeader>
        <ImgPokeball src={pokeball} alt="pokeball"/>
        <HeaderDetails>
          <ArrowBack to="/"><ArrowImg src={seta} /></ArrowBack>
          <H2header>{activePokemon.name}</H2header>
          <Pheader>{GetIdPokemon(activePokemon.url)}</Pheader>
        </HeaderDetails>
        <ImgPokemon src={activePokemon.image} alt="" />     
      </DivHeader>    
      <ContainerStats>
        <TypeTitle>
          <TypeOne color={colorPokemon}>{activePokemon.principalType}</TypeOne>
          {activePokemon.secondaryType ? <TypeTwo color={Color[activePokemon.secondaryType]}>{activePokemon.secondaryType}</TypeTwo> : ""}
        </TypeTitle>
        <div>
          <AboutTitle color={colorPokemon}>About</AboutTitle>
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
              {                            
                activePokemon.moviments.map((moviment: string, index: number) => {
                  if(index < 2){
                    return (
                      <ActiveP>{moviment}</ActiveP>
                    )
                  }
                })
              }
              <ActiveH3>Moves</ActiveH3>
            </LeftDiv>        
          </GridInfo>
          <div>
            <FavlorText>{activePokemon.flavorText.replace(/\n/g, ' ').replace(/\f/g, '')}</FavlorText>
          </div>
        </div>
        <BaseStatsTitle color={colorPokemon}>Base Stats</BaseStatsTitle>    
        {
          activePokemon.habilities.map((pokemon: any) => (
            <StatsText>
              <LeftDiv>
                <span>{HabilitiesEnum[pokemon.name]}</span>
                <span>{pokemon.base_stat}</span>
              </LeftDiv>
              <Barra>
                <DivHabilitiesBackGround color={colorPokemon}>
                  <DivHabilities color={colorPokemon} percent = {`${pokemon.base_stat}`} />          
                </DivHabilitiesBackGround>
              </Barra>
            </StatsText>
          ))
        }        
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