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

const Home = ({data, dispatch}: any) => {

  const [search, setSearch] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  useEffect(()=>{
   async function GetPokedexAsync (dispatch: any) {
    await getPokedex(dispatch);     
    setLoading(false)     
   }
   GetPokedexAsync(dispatch);     
  },[])

  if (error) {
    return (
      <Error />
    )
  }

  if (loading) {
    return(
      <Loading/>
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
          data.filter((value: any) =>{
            if(search === ""){
              return(value)
            }else if(value.name.toLowerCase().includes(search.toLowerCase())){
              return (value)
            } else if (value.url.substring(34).replaceAll('/','').includes(search.toLowerCase())){
              return (value)
            }
          })
          .map((pokemon: { name: string, url: any, image: string, typename: any, principalType: any }) => (            
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

const mapStateToProps = (state: any) => ({
  data: state.PokedexReducer.data,
  activePokemon: state.PokedexReducer.activePokemon
})

export default connect(mapStateToProps)(Home);