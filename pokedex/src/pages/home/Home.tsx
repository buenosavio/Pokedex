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
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { getPokedex, handlePokemon } from "../../store/actions/PokedexAction";
import { Container, Columns, LinkStyled } from "../../General.styles";

import Color from "../../enum/ColorsEnum";
import Header from "../../components/header/Header";
import GetIdPokemon from "../../Utils/GetIdPokemon";
import FormatNamePokemon from "../../Utils/FormatNamePokemon";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";

import { RootState } from "../../store";
import { AppDispatch } from "../../store";
import { PokemonDataDTO } from "../../models/PokemonDataDTO";
import PropsDTO from "../../models/PropsDTO";

const Home = ({data, loading, error, dispatch}: PropsDTO) => {

  const [search, setSearch] = useState<string>("")

  useEffect(()=>{
   async function GetPokedexAsync (dispatch: AppDispatch) {
    await getPokedex(dispatch);     
   }
   GetPokedexAsync(dispatch);     
  },[])

  if (loading) {
    return(
      <Loading/>
    )
  }

  if (!error) {
    return (
      <Error />
    )
  }

  return (
    <Container>
      <HeaderContainer>
        <Header/>
        <InputStyled>
          <InputSearch type="text" placeholder= "Procurar" onChange={(e) => setSearch(e.target.value)}/>
          {(search) ? null : <IconSearch/> }               
        </InputStyled>
      </HeaderContainer>
      <Columns>
        { 
          data.filter((value: PokemonDataDTO) =>{
            if(search === ""){
              return(value)
            }else if(value.name.toLowerCase().includes(search.toLowerCase())){
              return (value)
            } else if (value.url.substring(34).replaceAll('/','').includes(search.toLowerCase())){
              return (value)
            }
          })
          .map((pokemon: PokemonDataDTO) => (            
            <LinkStyled onClick={() => handlePokemon(pokemon, dispatch)} to={'/detail'} key={pokemon.name}>
              <DivStyled color={Color[pokemon.principalType]}>
                <IdPokemon color={Color[pokemon.principalType]}> {GetIdPokemon(pokemon.url)} </IdPokemon>              
                <ImgStyled src={pokemon.image} alt={pokemon.name}/>                         
                <Description color={Color[pokemon.principalType]}> {FormatNamePokemon(pokemon.name)} </Description>                
              </DivStyled>        
            </LinkStyled>
          ))
        }
        </Columns>
    </Container>
  )
}

const mapStateToProps = (state: RootState) => ({
  data: state.PokedexReducer.data,
  loading: state.PokedexReducer.loading,
  error: state.PokedexReducer.error,
  activePokemon: state.PokedexReducer.activePokemon
})

export default connect(mapStateToProps)(Home);