// Importar AppRouter desde './AppRouter' para definir las rutas de la aplicación
import { AppRouter } from './AppRouter';
// Importar PokemonProvider desde './context/PokemonProvider' para proveer el contexto de Pokémon a la aplicación
import { PokemonProvider } from './context/PokemonProvider';

// Componente principal de la aplicación
function App() {
    return (
        // Proveer el contexto de Pokémon a la aplicación
        <PokemonProvider>
            {/* Utilizar el enrutador principal de la aplicación */}
            <AppRouter />
        </PokemonProvider>
    );
}

// Exportar el componente principal de la aplicación
export default App;



