// Importaciones necesarias desde React y React Router
import { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';
import logo from '../assets/Pokédex_logo.png';

// Definición del componente funcional Navigation
export const Navigation = () => {
    // Uso del contexto PokemonContext para obtener funciones y valores relacionados con el formulario de búsqueda
    const { onInputChange, valueSearch, onResetForm } = useContext(PokemonContext);

    // Hook useNavigate para navegar programáticamente
    const navigate = useNavigate();

    // Función para manejar el envío del formulario de búsqueda
    const onSearchSubmit = e => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        navigate('/search', {
            state: valueSearch, // Navegar a la ruta de búsqueda con el valor de búsqueda como estado
        });

        onResetForm(); // Resetear el formulario después de la búsqueda
    };

    return (
        <>
            {/* Encabezado del sitio */}
            <header className='container'>
                {/* Enlace a la página principal con el logo */}
                <Link to='/' className='logo'>
                    <img
                        src='https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png'
                        alt='Logo Pokedex'
                    />
                </Link>

                {/* Formulario de búsqueda */}
                <form onSubmit={onSearchSubmit}>
                    <div className='form-group'>
                        {/* Icono de búsqueda */}
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='icon-search'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                            />
                        </svg>
                        {/* Campo de entrada para la búsqueda */}
                        <input
                            type='search'
                            name='valueSearch'
                            value={valueSearch}
                            onChange={onInputChange}
                            placeholder='Buscar nombre de pokemon'
                        />
                    </div>

                    {/* Botón para enviar el formulario de búsqueda */}
                    <button className='btn-search'>Buscar</button>
                </form>
            </header>

            {/* Outlet para renderizar rutas anidadas */}
            <Outlet />
        </>
    );
};


