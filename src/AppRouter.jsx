// Importar React desde 'react'
import React from 'react';
// Importar Navigate, Route y Routes desde 'react-router-dom' para definir las rutas de la aplicación
import { Navigate, Route, Routes } from 'react-router-dom';
// Importar Navigation desde './components/Navigation' para mostrar la barra de navegación
import { Navigation } from './components/Navigation';
// Importar HomePage, PokemonPage y SearchPage desde './pages' para definir las páginas de la aplicación
import { HomePage, PokemonPage, SearchPage } from './pages';

// Componente que define las rutas de la aplicación
export const AppRouter = () => {
    return (
        <Routes>
            {/* Ruta base que muestra la barra de navegación en todas las páginas */}
            <Route path='/' element={<Navigation />}>
                {/* Ruta de inicio que muestra la página de inicio */}
                <Route index element={<HomePage />} />
                {/* Ruta para mostrar detalles de un Pokémon por ID */}
                <Route path='pokemon/:id' element={<PokemonPage />} />
                {/* Ruta para mostrar resultados de búsqueda */}
                <Route path='search' element={<SearchPage />} />
            </Route>

            {/* Ruta de redireccionamiento para rutas no encontradas */}
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    );
};


