async function fetchPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemons/1');
    if (!response.ok) {
      throw new Error(`Status: ${response.status}. Network response was not OK`);
    }
    const data = await response.json();
    return console.log(data);
  } catch (err) {
    console.error('Fetch error encountered:', err);
  }
}

fetchPokemon();
