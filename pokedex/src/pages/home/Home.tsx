import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPokedex, handlePokemon } from "../../store/actions/PokedexAction";
import { AiOutlineSortAscending } from "react-icons/ai";



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
import { Link } from "react-router-dom";
import { AnyAction, bindActionCreators, Dispatch } from "redux";

const Home = ({data, dispatch}: any) => {

  const [search, setSearch] = useState("")

  useEffect(()=>{
    getPokedex(dispatch)
  },[])
  
  return (
    <>
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
            <Link onClick={() => handlePokemon(e, dispatch)} to={'/detail'}>
              <DivStyled color={Color[e.principalType]} key={e.url.substring(34).replaceAll('/','')}>
                <IdPokemon color={Color[e.principalType]} >#{e.url.substring(34).replaceAll('/','')}</IdPokemon>              
                <ImgStyled src={e.image} alt={e.name}/>                         
                <Description color={Color[e.principalType]}>{e.name}</Description>                
              </DivStyled>        
            </Link>
          )
          )
        }
        </Columns>
    </Container>
    </>
  )
}

const mapStateToProps = (state: any) => ({
  data: state.PokedexReducer.data,
  activePokemon: state.PokedexReducer.activePokemon
})

// const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => (
//   bindActionCreators(handlePokemon, dispatch)
// )

export default connect(mapStateToProps)(Home);