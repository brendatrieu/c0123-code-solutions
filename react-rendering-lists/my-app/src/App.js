import PokemonList from './PokemonList';
import './App.css';

function App() {
  const pokedex = [
    { number: '001', name: 'Bulbasaur' },
    { number: '004', name: 'Charmander' },
    { number: '007', name: 'Squirtle' },
    { number: '025', name: 'Pikachu' },
    { number: '039', name: 'Jigglypuff' }
  ];
  return (
    <PokemonList list={pokedex} />
  );
}

export default App;
