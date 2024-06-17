// Importaciones necesarias desde React y componentes específicos
import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { CardPokemon } from './CardPokemon';
import { Loader } from './Loader';

// Definición del componente funcional PokemonList
export const PokemonList = () => {
    // Uso del contexto PokemonContext para obtener datos y estado
    const { allPokemons, loading, filteredPokemons } = useContext(PokemonContext);

    // Renderizado condicional basado en el estado de carga
    return (
        <>
            {loading ? (
                // Mostrar el componente Loader si está en estado de carga
                <Loader />
            ) : (
                // Mostrar la lista de Pokémon cuando no está en estado de carga
                <div className='card-list-pokemon container'>
                    {/* Mostrar los Pokémon filtrados si existen */}
                    {filteredPokemons.length ? (
                        <>
                            {filteredPokemons.map(pokemon => (
                                // Renderizar el componente CardPokemon para cada Pokémon filtrado
                                <CardPokemon pokemon={pokemon} key={pokemon.id} />
                            ))}
                        </>
                    ) : (
                        // Mostrar todos los Pokémon si no hay Pokémon filtrados
                        <>
                            {allPokemons.map(pokemon => (
                                // Renderizar el componente CardPokemon para cada Pokémon
                                <CardPokemon pokemon={pokemon} key={pokemon.id} />
                            ))}
                        </>
                    )}
                </div>
            )}
        </>
    );
};

