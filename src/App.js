import React, { useState, useEffect } from 'react';
import Pokedex from './components/Pokedex';
import PokemonDetails from './components/PokemonDetails';
import data from './data/pokemon.json';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const pokemonsPerPage = 4;

  useEffect(() => {
    setPokemons(data);
  }, []);

  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleCloseDetails = () => {
    setSelectedPokemon(null);
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(pokemons.length / pokemonsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * pokemonsPerPage;
  const currentPokemons = pokemons.slice(startIndex, startIndex + pokemonsPerPage);

  return (
    <div>
      <h1>Pokédex</h1>
      <Pokedex pokemons={currentPokemons} onCardClick={handleCardClick} />
      {selectedPokemon && (
        <PokemonDetails pokemon={selectedPokemon} onClose={handleCloseDetails} />
      )}
      <div className="button-container">
        <button onClick={handlePrevious} disabled={currentPage === 0}>Précédent</button>
        <button onClick={handleNext} disabled={currentPage >= Math.ceil(pokemons.length / pokemonsPerPage) - 1}>Suivant</button>
        </div>
    </div>
  );
};

export default App;