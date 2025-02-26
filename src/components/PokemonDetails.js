import React from 'react';

const PokemonDetails = ({ pokemon, onClose }) => {
  return (
    <div className="pokemon-details">
      <h2>{pokemon.name}</h2>
      <p>Type: {pokemon.Type1} {pokemon.Type2 ? `, ${pokemon.Type2}` : ''}</p>
      <p>Évolution: {pokemon.Evolution || 'Aucune'}</p>
      <button onClick={onClose}>Fermer</button>
    </div>
  );
};

export default PokemonDetails;