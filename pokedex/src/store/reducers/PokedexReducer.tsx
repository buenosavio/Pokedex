const INITIAL_VALUES = {
  data: []
}

const PokedexReducer = (state = INITIAL_VALUES, action: any) => {
  if (action.type === 'GET_POKEDEX') {
    return {
      ...state,
      data: action.newPokeList
    }
  }
  return state;
}

export default PokedexReducer