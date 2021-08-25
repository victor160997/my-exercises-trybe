import logo from './logo.svg';
import './App.css';
import pokemons from './data';
import Pokemon from './Pokemon';
import Pokedesk from './Pokedesk'

function App() {
  return (
    <div className = 'pokedesk'>
      <h1>My Pokedesk</h1>
      <Pokedesk />
    </div>
  );
}

export default App;
