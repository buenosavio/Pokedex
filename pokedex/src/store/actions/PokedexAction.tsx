import { Action } from "redux"
import { api } from "../../api"

export const getPokedex = async () => {

  try {
    const {data} = await api.get('/4')
    const pokeList = (data.pokemon_entries)    
    
    pokeList.forEach((e: { pokemon_species: any }) => {
      console.log(e.pokemon_species.name)
    })

  } catch (error) {
    console.log(error)
  }
}

export const handlePokemon = (value: any, dispatch: any) => {

  const variavel = {
    type: 'GET_POKEDEX',
    value
  }

  dispatch(variavel)

  
}