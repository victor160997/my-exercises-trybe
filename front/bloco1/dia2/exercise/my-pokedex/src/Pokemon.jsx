import React from 'react';
import './Style.css';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image, id } = this.props.pokemon;
    return (
      <div className = 'pokemon'>
        <div className = 'poke'>
          <p>{name}</p>
          <p>{type}</p>
          <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <img src = {image} />
      </div>
    );
  }
}

export default Pokemon;