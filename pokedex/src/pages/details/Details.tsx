import { useEffect } from "react";
import { connect } from "react-redux";

const Details = ({activePokemon, dispatch}: any) => {

  return (
    <>
    <div>
      <p>#{activePokemon.url.substring(34).replaceAll('/','')}</p>
      <h1>{activePokemon.name}</h1>
      <img src={activePokemon.image} alt="" />
      <p>{activePokemon.typename[0]}</p>
      <p>{activePokemon.typename[1]}</p>
    </div>

    {/* about */}
    <div>
      <h1>About</h1>
      <p>Height: {activePokemon.height}</p>
      <p>Weight: {activePokemon.weight}</p>
      <p>Moves: {activePokemon.moviments[0]}</p>
      <p>Moves: {activePokemon.moviments[1]}</p>
    </div>

    {/* stats */}
    <div>
      <h1>Base Stats</h1>
      <p>HP: {activePokemon.habilities[0].base_stat}</p>
      <p>Attack: {activePokemon.habilities[1].base_stat}</p>
      <p>Defense: {activePokemon.habilities[2].base_stat}</p>
      <p>Special-Attack: {activePokemon.habilities[3].base_stat}</p>
      <p>Special-Defense: {activePokemon.habilities[4].base_stat}</p>
      <p>Speed: {activePokemon.habilities[5].base_stat}</p>
    </div>
    </>
  )
}

const mapStateToProps = (state: any) => ({
  activePokemon: state.PokedexReducer.activePokemon,
})

export default connect(mapStateToProps)(Details);