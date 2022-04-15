import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { api } from "../../api";
import {handlePokemon } from "../../store/actions/PokedexAction";

const Home = ({pokemon_entries, dispatch}: any) => {

  const [data, setData] = useState<any>([])

  const getPokedex = async () => {
    try {
      const {data} = await api.get('/4')
      const pokeList = (data.pokemon_entries) 
      setData(pokeList)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getPokedex()
  },[])

  console.log(data)
  return (
    <div>
      <div>Pokedex</div>
      <hr/>
      <button onClick={() => handlePokemon(dispatch)}>pikaxu</button>
      {
        data.map((e: { pokemon_species: any }) => (
          //console.log(e.pokemon_species.name)
          <h1>{e.pokemon_species.name}</h1>

        ))
      }
    </div>
    
  )
}

const mapStateToProps = (state: any) => ({
  pokemon_entries: state.PokedexReducer.pokemon_entries
})

export default connect(mapStateToProps)(Home);