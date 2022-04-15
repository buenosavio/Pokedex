import { Action } from "redux"
import { api } from "../../api"



export const handlePokemon = (dispatch: any) => {

  const variavel = {
    type: 'GET_POKEDEX',
    'entry_number': 0,
  }
  dispatch(variavel)
}