import { api } from "../../api"

export const getPokedex = async (dispatch: any) => {
  
  try {
    const {data} = await api.get('/pokemon?limit=1&offset=0')
    let pokeList = (data.results)
    let newPokeList:any = [];

    pokeList.map((i: any) => {
      const urlImage = (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i.url.substring(34).replaceAll('/','')}.svg`)
      i.image = urlImage;        
      newPokeList.push(i)
    })  
    
    dispatch({type:'GET_POKEDEX', newPokeList}) 

  } catch (error) {
    console.log(error)
  }
}
