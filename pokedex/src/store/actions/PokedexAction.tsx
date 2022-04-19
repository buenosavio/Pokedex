import { api } from "../../api"

export const getPokedex = async (dispatch: any) => {
  
  try {
    const {data} = await api.get('/pokemon?limit=10&offset=0')
    let pokeList = await (data.results)
    let newPokeList:any = []; 

    pokeList.map((pokemon: any) => {
      const urlImage = (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.url.substring(34).replaceAll('/','')}.svg`);
      pokemon.image = urlImage;        
      newPokeList.push(pokemon);
    })  

    await fitPokeList(newPokeList, dispatch);
    
  } catch (error) {
    console.log(error);
  }
}

const fitPokeList = async(newPokeList: any[], dispatch: any) => {

  let listaaux: any[] = [];

  newPokeList.map(async (pokemon: any) => {
    try {
      const {data} = await api.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.url.substring(34).replaceAll('/','')}`);
      const types = data.types;

      const result = await api.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.url.substring(34).replaceAll('/','')}`);
      const flavor_text = result ? result.data.flavor_text_entries[0].flavor_text : "";

      let typeName:any = [];
      types.map((e: any) => {
        typeName.push(e.type.name);
      })        
      
      let habilities: any = [];
      data.stats.map((stat:any) => {          
        habilities.push({'name': stat.stat.name, 'base_stat': stat.base_stat});
      })

      let moviments: any = [];
      data.moves.map((move:any) => {
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
        dispatch({type:'GET_POKEDEX', newPokeList});
      }

    } catch (error) {
      console.log(error);
    }
  });
}

export const handlePokemon = (details: any, dispatch: any) => {
  
  console.log(details)

  const Details = {
    type : "GET_DETAILS",
    details,
  }

  dispatch(Details)
}

