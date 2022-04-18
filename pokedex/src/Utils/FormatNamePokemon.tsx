const FormatNamePokemon = (value: string) => {

  const name = value.charAt(0).toUpperCase() + value.substring(1)
  
  return (
    <>
    {name}
    </>
  )
}

export default FormatNamePokemon;