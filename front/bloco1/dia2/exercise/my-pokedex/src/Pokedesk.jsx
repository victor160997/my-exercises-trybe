import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';
import './Style.css';

class Pokedesk extends React.Component {
  render() {
    return pokemons.map((poke) => {
      return (
          <Pokemon pokemon = {poke}/>
      );
    });
  }
}

export default Pokedesk;