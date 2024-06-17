// Importar React y useContext desde React
import React, { useContext } from 'react';
// Importar los componentes FilterBar y PokemonList desde '../components'
import { FilterBar, PokemonList } from '../components';
// Importar el contexto PokemonContext desde '../context/PokemonContext'
import { PokemonContext } from '../context/PokemonContext';

// Página de inicio que muestra la lista de Pokémon y el filtro
export const HomePage = () => {
    // Obtener la función onClickLoadMore y el estado active del contexto
    const { onClickLoadPrevious,onClickLoadMore, active, setActive } = useContext(PokemonContext);

    return (
        <>
            {/* Contenedor del filtro */}
            <div className='container-filter container'>
                {/* Icono de filtro */}
                <div className='icon-filter' onClick={() => setActive(!active)}>
                    {/* Icono SVG */}
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='icon'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75'
                        />
                    </svg>
                    {/* Texto 'Filtrar' */}
                    <span>Filtrar</span>
                </div>
            </div>
            {/* Botón de cargar más */}
            <div className="container-btn-load-more container">
                <button className='btn-load-more' onClick={onClickLoadMore}>
                    Cargar más
                </button>
                <button className='btn-load-more' onClick={onClickLoadPrevious}>
                    Cargar anteriores
                </button>
            </div>
            {/* Lista de Pokémon */}
            <PokemonList />
            {/* Barra de filtro */}
            <FilterBar />
            
        </>
    );
};


