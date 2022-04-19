import { api } from "../../api"
import {AppDispatch} from '..'
import {EstadoDTO} from '../../models/EstadoDTO'
import {PokemonDataDTO} from '../../models/PokemonDataDTO'
import {TypeDTO} from '../../models/TypeDTO'
import {HabilitiesDTO} from '../../models/HabilitiesDTO'
import {MoveDTO} from '../../models/MovimentsDTO'

let loading = true;
let error = false;

export const getPokedex = async (dispatch: AppDispatch) => {
  try {
    const {data} = await api.get('/pokemon?limit=20&offset=0')
    let pokeList = await (data.results)
    let newPokeList: PokemonDataDTO[] = []; 
    pokeList.map((pokemon: PokemonDataDTO) => {
      const urlImage = (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.url.substring(34).replaceAll('/','')}.svg`);
      pokemon.image = urlImage;        
      newPokeList.push(pokemon);
    })  
    loading = false
    error = true
    await fitPokeList(newPokeList, dispatch);
  } catch (error) {
    console.log(error);
    loading = false
    error = true
  }

}

const fitPokeList = async(newPokeList: PokemonDataDTO[], dispatch: AppDispatch) => {

  let listaaux: PokemonDataDTO[] = [];

  newPokeList.map(async (pokemon: PokemonDataDTO) => {
    try {
      const {data} = await api.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.url.substring(34).replaceAll('/','')}`);
      const types = data.types;

      const result = await api.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.url.substring(34).replaceAll('/','')}`);
      const flavor_text = result ? result.data.flavor_text_entries[0].flavor_text : "";

      let typeName: string[] = [];
      types.map((e: TypeDTO) => {
        typeName.push(e.type.name);  
      })        
      
      let habilities: HabilitiesDTO[] = [];
      data.stats.map((estado: EstadoDTO) => {          
        habilities.push({'name': estado.stat.name, 'base_stat': estado.base_stat});        
      })

      let moviments: string[] = [];
      data.moves.map((move: MoveDTO) => {
        moviments.push(move.move.name);
      })

      pokemon.typename = typeName;
      pokemon.principalType = typeName[0] ? typeName[0] : null;
      pokemon.secondaryType = typeName[1] ? typeName[1] : null
      pokemon.weight = data.weight/10;
      pokemon.height = data.height/10;
      pokemon.habilities = habilities;
      pokemon.moviments = moviments;
      pokemon.flavorText = flavor_text;

      listaaux.push(pokemon);    
         
      if(listaaux.length === newPokeList.length)
      {
        dispatch({type:'GET_POKEDEX', newPokeList, loading, error});
      }

    } catch (error) {
      console.log(error);
    }
  });
}

export const handlePokemon = (details: PokemonDataDTO, dispatch: AppDispatch) => {

  const Details = {
    type : "GET_DETAILS",
    details,
  }

  dispatch(Details)
}

