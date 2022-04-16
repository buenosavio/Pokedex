import axios from "axios";
import { api } from "../../api"

export const getPokedex = async (dispatch: any) => {

  try {
    const {data} = await api.get('/pokemon?limit=6&offset=0')
    let pokeList = await (data.results)
    let newPokeList:any = []; 

    pokeList.map((i: any) => {
      const urlImage = (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i.url.substring(34).replaceAll('/','')}.svg`)
      i.image = urlImage;        
      newPokeList.push(i)
    })  

    newPokeList.map(async (i: any) => {
      try {
        const {data} = await api.get(`https://pokeapi.co/api/v2/pokemon/${i.url.substring(34).replaceAll('/','')}`)
        const types = await (data.types)

        let typeName:any = [];
        types.map((e: any) => {
          typeName.push(e.type.name)
        })
        i.typename = typeName;
        i.principalType   = typeName[0];

        newPokeList.shift(i)
        newPokeList.push(i)        
      } catch (error) {
        console.log(error)
      }
    })

    dispatch({type:'GET_POKEDEX', newPokeList}) 

  } catch (error) {
    console.log(error)
  }
}


export const GetDetails = async (state: any, dispatch: any) => {
  state.newPokeList.map(async(e: any) =>{
    try {
        const {data} = await axios.get('urlpokemonCOMID')
        // verificar a url correta
        const Details = {
          type : "GET_DETAILS",
          details: data,
        }
        dispatch(Details)
    } catch (error) {
      
    }
  })
}

export const sortListId = async (dispatch: any) => {}

