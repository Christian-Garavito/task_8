import { useEffect, useState } from 'react';
import { useForm } from '../hook/useForm'; // Importar hook personalizado
import { PokemonContext } from './PokemonContext';

export const PokemonProvider = ({ children }) => {
    // Estados para almacenar los Pokémon
    const [allPokemons, setAllPokemons] = useState([]); // Almacena todos los Pokémon
    const [globalPokemons, setGlobalPokemons] = useState([]); // Almacena todos los Pokémon globalmente
    const [offset, setOffset] = useState(0); // Offset para la paginación

    // Utilizar CustomHook - useForm
    const { valueSearch, onInputChange, onResetForm } = useForm({
        valueSearch: '', // Valor de búsqueda inicial
    });

    // Estados para el estado de carga y filtros
    const [loading, setLoading] = useState(true); // Estado de carga
    const [active, setActive] = useState(false); // Estado para el filtro

    // Función para obtener 50 Pokémon de la API
    const getAllPokemons = async (limit = 50) => {
        const baseURL = 'https://pokeapi.co/api/v2/';

        const res = await fetch(
            `${baseURL}pokemon?limit=${limit}&offset=${offset}`
        );
        const data = await res.json();

        // Obtener detalles de cada Pokémon
        const promises = data.results.map(async pokemon => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data;
        });
        const results = await Promise.all(promises);

        // Actualizar el estado con los Pokémon obtenidos
        //...allPokemons,
        setAllPokemons([ ...results]);
        setLoading(false);
    };

    // Función para obtener todos los Pokémon
    const getGlobalPokemons = async () => {
        const baseURL = 'https://pokeapi.co/api/v2/';

        const res = await fetch(
            `${baseURL}pokemon?limit=100000&offset=0`
        );
        const data = await res.json();

        // Obtener detalles de cada Pokémon
        const promises = data.results.map(async pokemon => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data;
        });
        const results = await Promise.all(promises);

        // Actualizar el estado global con todos los Pokémon
        setGlobalPokemons(results);
        setLoading(false);
    };

    // Función para obtener un Pokémon por su ID
    const getPokemonByID = async id => {
        const baseURL = 'https://pokeapi.co/api/v2/';

        const res = await fetch(`${baseURL}pokemon/${id}`);
        const data = await res.json();
        return data;
    };

    // Efecto para cargar los Pokémon al montar y al cambiar el offset
    useEffect(() => {
        getAllPokemons();
    }, [offset]);

    // Efecto para cargar todos los Pokémon al montar el componente
    useEffect(() => {
        getGlobalPokemons();
    }, []);

    // Función para cargar más Pokémon
    const onClickLoadMore = () => {
        setOffset(offset + 50);
    };

    // Función para cargar más Pokémon
    const onClickLoadPrevious = () => {
        setOffset(offset - 50);
    };

    // Estado y función para gestionar los tipos de Pokémon seleccionados
    const [typeSelected, setTypeSelected] = useState({
        // Estados iniciales para los tipos de Pokémon
        grass: false,
        normal: false,
        // Otros tipos...
    });

    // Estado y función para almacenar los Pokémon filtrados
    const [filteredPokemons, setFilteredPokemons] = useState([]);

    // Función para manejar el cambio en los checkboxes de tipos de Pokémon
    const handleCheckbox = e => {
        setTypeSelected({
            ...typeSelected,
            [e.target.name]: e.target.checked,
        });

        if (e.target.checked) {
            // Filtrar Pokémon que coinciden con el tipo seleccionado
            const filteredResults = globalPokemons.filter(pokemon =>
                pokemon.types.map(type => type.type.name).includes(e.target.name)
            );
            setFilteredPokemons([...filteredPokemons, ...filteredResults]);
        } else {
            // Remover Pokémon del filtro
            const filteredResults = filteredPokemons.filter(
                pokemon => !pokemon.types.map(type => type.type.name).includes(e.target.name)
            );
            setFilteredPokemons([...filteredResults]);
        }
    };

    return (
        // Proporcionar los valores y funciones a través del contexto
        <PokemonContext.Provider
            value={{
                valueSearch,
                onInputChange,
                onResetForm,
                allPokemons,
                globalPokemons,
                getPokemonByID,
                onClickLoadMore,
                onClickLoadPrevious,
                loading,
                setLoading,
                active,
                //setActive,
                handleCheckbox,
                filteredPokemons,
            }}
        >
            {children}
        </PokemonContext.Provider>
    );
};


