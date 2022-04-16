import { useEffect } from "react";
import { connect } from "react-redux";
import { GetDetails } from "../../store/actions/PokedexAction";

const Details = ({activePokemon, dispatch}: any) => {

  //funcao busca peso e altura const
  //funcao busca moves
  //



  return (
    <>
    <div>
      <h1>Details</h1>
      <h1>{activePokemon.url.substring(34).replaceAll('/','')}</h1>
      <h1>{activePokemon.name}</h1>
      <img src={activePokemon.image} alt="" />
      <p>{activePokemon.typename[0]}</p>
      <p>{activePokemon.typename[1]}</p>
    </div>

    {/* about */}
    <div>

    </div>

    {/* stats */}
    <div>

    </div>
    </>
  )
}

const mapStateToProps = (state: any) => ({
  activePokemon: state.PokedexReducer.activePokemon,
})

export default connect(mapStateToProps)(Details);