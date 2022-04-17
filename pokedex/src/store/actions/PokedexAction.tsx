import { api } from "../../api"

export const getPokedex = async (dispatch: any) => {
  try {
    const {data} = await api.get('/pokemon?limit=9&offset=0')
    let pokeList = await (data.results)
    let newPokeList:any = []; 

    pokeList.map((i: any) => {
      const urlImage = (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i.url.substring(34).replaceAll('/','')}.svg`);
      i.image = urlImage;        
      newPokeList.push(i);
    })  

    await fitPokeList(newPokeList, dispatch);
    
  } catch (error) {
    console.log(error);
  }
}

const fitPokeList = async(newPokeList: any[], dispatch: any) => {
  newPokeList.map(async (i: any) => {
    try {
      const {data} = await api.get(`https://pokeapi.co/api/v2/pokemon/${i.url.substring(34).replaceAll('/','')}`);
      const types = data.types;
      
      console.log(data);

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

      i.typename = typeName;
      i.principalType = typeName[0];
      i.weight = data.weight/10;
      i.height = data.height/10;
      i.habilities = habilities;
      i.moviments = moviments;

      newPokeList.shift();
      newPokeList.push(i);      
         
      if(newPokeList.filter((i) => i.principalType !== "").length === newPokeList.length)
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

