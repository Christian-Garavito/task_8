// Importar React, useContext, useEffect, useState y useParams desde React
import React, { useContext, useEffect, useState } from 'react';
// Importar useParams desde react-router-dom para obtener los parámetros de la URL
import { useParams } from 'react-router-dom';
// Importar Loader desde '../components' para mostrar durante la carga de datos
import { Loader } from '../components';
// Importar PokemonContext desde '../context/PokemonContext' para acceder al contexto
import { PokemonContext } from '../context/PokemonContext';
// Importar la función primerMayuscula desde '../helper/helper' para capitalizar el nombre del Pokémon
import { primerMayuscula } from '../helper/helper';

// Página para mostrar detalles de un Pokémon
export const PokemonPage = () => {
    // Obtener la función getPokemonByID del contexto
    const { getPokemonByID } = useContext(PokemonContext);

    // Estado para la carga
    const [loading, setLoading] = useState(true);
    // Estado para los datos del Pokémon
    const [pokemon, setPokemon] = useState({});

    // Obtener el parámetro 'id' de la URL
    const { id } = useParams();

    // Función para obtener los detalles del Pokémon por su ID
    const fetchPokemon = async id => {
        const data = await getPokemonByID(id);
        setPokemon(data);
        setLoading(false);
    };

    // Cargar los datos del Pokémon al montar el componente
    useEffect(() => {
        fetchPokemon(id);
    }, []);

    // Renderizar la página
    return (
        <main className='container main-pokemon'>
            {/* Mostrar el Loader durante la carga */}
            {loading ? (
                <Loader />
            ) : (
                <>
                    {/* Cabecera del Pokémon */}
                    <div className='header-main-pokemon'>
                        {/* Número del Pokémon */}
                        <span className='number-pokemon'>#{pokemon.id}</span>
                        {/* Imagen del Pokémon */}
                        <div className='container-img-pokemon'>
                            <img
                                src={pokemon.sprites.other.dream_world.front_default}
                                alt={`Pokemon ${pokemon?.name}`}
                            />
                        </div>

                        {/* Información del Pokémon */}
                        <div className='container-info-pokemon'>
                            {/* Nombre del Pokémon */}
                            <h1>{primerMayuscula(pokemon.name)}</h1>
                            {/* Tipos del Pokémon */}
                            <div className='card-types info-pokemon-type'>
                                {pokemon.types.map(type => (
                                    <span key={type.type.name} className={`${type.type.name}`}>
                                        {type.type.name}
                                    </span>
                                ))}
                            </div>
                            {/* Altura y peso del Pokémon */}
                            <div className='info-pokemon'>
                                <div className='group-info'>
                                    <p>Altura</p>
                                    <span>{pokemon.height}</span>
                                </div>
                                <div className='group-info'>
                                    <p>Peso</p>
                                    <span>{pokemon.weight}KG</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Estadísticas del Pokémon */}
                    <div className='container-stats'>
                        <h1>Estadísticas</h1>
                        <div className='stats'>
                            {pokemon.stats.map((stat, index) => (
                                <div className='stat-group' key={index}>
                                    <span>{stat.stat.name}</span>
                                    <div className='progress-bar'></div>
                                    <span className='counter-stat'>
                                        {stat.base_stat}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </main>
    );
};



