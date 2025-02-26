import React from 'react';

const PokemonCard = ({ pokemon, onClick }) => {
  //console.log('Pokemon Name:', pokemon.Name); // Ajoutez cette ligne pour déboguer

  return (
    <div className="pokemon-card" onClick={() => onClick(pokemon)}>
      <img src={require(`../images/${pokemon.Name.toLowerCase()}.png`)} alt={pokemon.Name} />
      <h2>{pokemon.Name}</h2>
      <p>Type: {pokemon.Type1} {pokemon.Type2 ? `, ${pokemon.Type2}` : ''}</p>
    </div>
  );
};

export default PokemonCard;