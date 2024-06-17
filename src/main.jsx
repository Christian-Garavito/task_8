// Importar React y ReactDOM desde 'react' para renderizar la aplicación
import React from 'react';
import ReactDOM from 'react-dom';
// Importar BrowserRouter desde 'react-router-dom' para manejar la navegación de la aplicación
import { BrowserRouter } from 'react-router-dom';
// Importar el componente principal App desde './App' para renderizar la aplicación
import App from './App';
// Importar el archivo de estilos './index.css' para aplicar estilos a la aplicación
import './index.css';

// Renderizar la aplicación en el elemento con id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
    // Utilizar React.StrictMode para activar un conjunto de comprobaciones adicionales en modo de desarrollo
    <React.StrictMode>
        {/* Envolvemos la aplicación en BrowserRouter para habilitar la navegación mediante rutas */}
        <BrowserRouter>
            {/* Renderizamos el componente principal de la aplicación */}
            <App />
        </BrowserRouter>
    </React.StrictMode>
);


