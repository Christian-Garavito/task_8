// Importar React y useContext desde React
import React, { useContext } from 'react';
// Importar useLocation desde react-router-dom para obtener la ubicación actual
import { useLocation } from 'react-router-dom';
// Importar CardPokemon desde '../components' para mostrar los Pokémon en la lista
import { CardPokemon } from '../components';
// Importar PokemonContext desde '../context/PokemonContext' para acceder al contexto
import { PokemonContext } from '../context/PokemonContext';

// Página de búsqueda que muestra los resultados de la búsqueda
export const SearchPage = () => {
    // Obtener la ubicación actual
    const location = useLocation();

    // Obtener la lista global de Pokémon del contexto
    const { globalPokemons } = useContext(PokemonContext);

    // Filtrar los Pokémon que coincidan con la búsqueda
    const filteredPokemons = globalPokemons.filter(pokemon =>
        pokemon.name.includes(location.state.toLowerCase())
    );

    // Renderizar la página de búsqueda
    return (
        <div className='container'>
            {/* Mostrar el número de resultados encontrados */}
            <p className='p-search'>
                Se encontraron <span>{filteredPokemons.length}</span>{' '}
                resultados:
            </p>
            {/* Lista de Pokémon encontrados */}
            <div className='card-list-pokemon container'>
                {/* Mapear y mostrar cada Pokémon encontrado */}
                {filteredPokemons.map(pokemon => (
                    <CardPokemon pokemon={pokemon} key={pokemon.id} />
                ))}
            </div>
        </div>
    );
};




