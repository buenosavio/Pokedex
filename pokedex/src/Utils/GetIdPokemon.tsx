const GetIdPokemon = (value: string) => {

  const idPokemon = (value ? value.split('/')[6] : '0')
  const idPokemonInt = parseInt(idPokemon);

  return (
    <>
    {idPokemonInt < 10
      ? `#00${idPokemonInt}`
      : idPokemonInt < 100
      ? `#0${idPokemonInt}`
      : `#${idPokemonInt}`}
    </>
  )
}

export default GetIdPokemon;