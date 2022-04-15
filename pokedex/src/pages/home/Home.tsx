import { url } from "inspector";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPokedex } from "../../store/actions/PokedexAction";

const Home = ({data, dispatch}: any) => {

  const splitId =  "https://pokeapi.co/api/v2/pokemon-species/25/";
  const myId = splitId.split("/", 7)
  const newID = myId.slice(6,7)
  console.log(myId)
  console.log(newID)

  useEffect(()=>{
    getPokedex(dispatch)
  },[])

  console.log(data)
  return (
    <div>
      <div>Pokedex</div>
      <hr/>
      {
        data.map((e: { name: string, url: string, image: string, types:any }) => (
          <div key={e.url.substring(34).replaceAll('/','')}>
            <h1>{e.name}</h1>    
            <p>{e.url.substring(34).replaceAll('/','')}</p>
            {/* <p>{e.types[0].type.name}</p> */}
            <img src={e.image} alt="" />      
          </div>
        ))
      }
    
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  data: state.PokedexReducer.data
})

export default connect(mapStateToProps)(Home);