export default function PokemonList({list}){
  const allPokemon = list.map((item) => <li key={item.number}>{item.name}</li>)
  return (
    <ul>{allPokemon}</ul>
  )
}
