interface IPokemonDTO {
  pokemon_entries: {
    'entry_number': number,
    'pokemon_species': {
                          'name': string
    }
  }
}

const INITIAL_VALUES = {
  pokemon_entries: {
    'entry_number': 0,
    'pokemon_species': {
                          'name': '',
                          'url': '',
    }
  }
}

const PokedexReducer = (state: IPokemonDTO = INITIAL_VALUES, action: any) => {
  if (action.type === 'GET_POKEDEX') {
    return {
      ...state,
      pokemon_entries: {
        entry_number: action.entry_number,
        pokemon_species: {
                            'name': action.name,
                            'url': action.url,
        }
      }
    }
  }
  return state;
}

export default PokedexReducer