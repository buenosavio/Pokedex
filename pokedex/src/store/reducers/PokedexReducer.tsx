const INITIAL_VALUES = {
  activePokemon: {},
  data: [],
  details: []
}

const PokedexReducer = (state = INITIAL_VALUES, action: any) => {
  if (action.type === 'GET_POKEDEX') {
    return {
      ...state,
      data: action.newPokeList
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