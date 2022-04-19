import { InitialDTO } from "../../models/PokemonDTO"
import {AnyAction} from 'redux'

const INITIAL_VALUES: InitialDTO = {
  activePokemon:{},
  data: [],
  loading: true,
  error: false,
}

const PokedexReducer = (state: InitialDTO = INITIAL_VALUES, action: AnyAction) => {
  if (action.type === 'GET_POKEDEX') {
    return {
      ...state,
      data: action.newPokeList,
      loading: action.loading,
      error: action.error,
    }
  }
  if(action.type === 'GET_DETAILS'){
    return {
      ...state,
      activePokemon: action.details
    }
  }
  return state;
}

export default PokedexReducer