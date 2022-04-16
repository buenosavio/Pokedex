const INITIAL_VALUES = {
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
    return{
      ...state,
      details: action.pokemonDetails
    }
  }
  return state;
}

export default PokedexReducer