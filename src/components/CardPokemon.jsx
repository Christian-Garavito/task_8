// Importación de React para usar JSX y crear componentes
import React from 'react';

// Importación del componente Link de react-router-dom para la navegación interna
import { Link } from 'react-router-dom';

// Definición del componente funcional CardPokemon que recibe un objeto pokemon como prop
export const CardPokemon = ({ pokemon }) => {
    return (
        // Uso de Link para crear un enlace a la ruta específica del Pokémon utilizando su ID
        <Link to={`/pokemon/${pokemon.id}`} className='card-pokemon'>
            {/* Contenedor para la imagen del Pokémon */}
            <div className='card-img'>
                {/* Etiqueta img para mostrar la imagen del Pokémon */}
                <img
                    // Fuente de la imagen, accediendo a la propiedad específica del objeto pokemon
                    src={pokemon.sprites.other.dream_world.front_default}
                    // Texto alternativo para la imagen, útil para accesibilidad
                    alt={`Pokemon ${pokemon.name}`}
                />
            </div>
            {/* Contenedor para la información del Pokémon */}
            <div className='card-info'>
                {/* Muestra el ID del Pokémon */}
                <span className='pokemon-id'>N° {pokemon.id}</span>
                {/* Muestra el nombre del Pokémon */}
                <h3>{pokemon.name}</h3>
                {/* Contenedor para los tipos del Pokémon */}
                <div className='card-types'>
                    {/* Itera sobre los tipos del Pokémon y crea un span para cada tipo */}
                    {pokemon.types.map(type => (
                        // Cada span recibe una clave única basada en el nombre del tipo
                        <span key={type.type.name} className={type.type.name}>
                            {/* Muestra el nombre del tipo */}
                            {type.type.name}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
};

