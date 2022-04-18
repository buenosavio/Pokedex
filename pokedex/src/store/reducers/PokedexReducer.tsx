import { InitialDTO } from "../../models/PokemonDTO"

const INITIAL_VALUES:InitialDTO = {
  activePokemon:{},
        data: [
          {
            id: 0,
            name: "",
            typename: [
              {
              type:{
                name: "",
              }
              }
            ],
            weight: 0,
            height: 0,
            habilities: [
              {
                name: "",
                base_stat: 0,
              }
            ],
            moviments:   {        
                name: "",   
            } ,
            
            flavor: "",
          }],
        loading: true,
        error: false,
}

const PokedexReducer = (state:InitialDTO = INITIAL_VALUES, action: any) => {
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