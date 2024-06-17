// Importaciones necesarias de React y del contexto PokemonContext
import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

// Definición del componente funcional FilterBar
export const FilterBar = () => {
    // Uso del hook useContext para obtener valores del contexto PokemonContext
    const { active, handleCheckbox } = useContext(PokemonContext);

    return (
        // Contenedor principal de los filtros, que incluye la clase 'active' si active es verdadero
        <div className={`container-filters ${active ? 'active' : ''}`}>
            {/* Sección para filtrar por tipo de Pokémon */}
            <div className='filter-by-type'>
                <span>Tipo</span>

                {/* Grupo de checkboxes para cada tipo de Pokémon */}
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='grass'
                        id='grass'
                    />
                    <label htmlFor='grass'>Planta</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='fire'
                        id='fire'
                    />
                    <label htmlFor='fire'>Fuego</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='bug'
                        id='bug'
                    />
                    <label htmlFor='bug'>Bicho</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='fairy'
                        id='fairy'
                    />
                    <label htmlFor='fairy'>Hada</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='dragon'
                        id='dragon'
                    />
                    <label htmlFor='dragon'>Dragón</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='shadow'
                        id='shadow'
                    />
                    <label htmlFor='shadow'>Fantasma</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='ground'
                        id='ground'
                    />
                    <label htmlFor='ground'>Tierra</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='normal'
                        id='normal'
                    />
                    <label htmlFor='normal'>Normal</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='psychic'
                        id='psychic'
                    />
                    <label htmlFor='psychic'>Psíquico</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='steel'
                        id='steel'
                    />
                    <label htmlFor='steel'>Acero</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='dark'
                        id='dark'
                    />
                    <label htmlFor='dark'>Siniestro</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='electric'
                        id='electric'
                    />
                    <label htmlFor='electric'>Eléctrico</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='fighting'
                        id='fighting'
                    />
                    <label htmlFor='fighting'>Lucha</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='flying'
                        id='flying'
                    />
                    <label htmlFor='flying'>Volador</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='ice'
                        id='ice'
                    />
                    <label htmlFor='ice'>Hielo</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='poison'
                        id='poison'
                    />
                    <label htmlFor='poison'>Veneno</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='rock'
                        id='rock'
                    />
                    <label htmlFor='rock'>Roca</label>
                </div>
                <div className='group-type'>
                    <input
                        type='checkbox'
                        onChange={handleCheckbox}
                        name='water'
                        id='water'
                    />
                    <label htmlFor='water'>Agua</label>
                </div>
            </div>
        </div>
    );
};


