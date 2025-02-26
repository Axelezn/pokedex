import React from 'react';
import PokemonCard from './PokemonCard';

const Pokedex = ({ pokemons, onCardClick }) => {
  return (
    <div className="pokedex">
      {pokemons.map((pokemon, index) => (
        <PokemonCard key={index} pokemon={pokemon} onClick={onCardClick} />
      ))}
    </div>
  );
};

export default Pokedex;