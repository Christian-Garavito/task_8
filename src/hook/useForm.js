// Importación del hook useState desde React
import { useState } from 'react';

// Definición del hook personalizado useForm
export const useForm = (initialForm = {}) => {
    // Declaración del estado formState usando useState, inicializado con initialForm
    const [formState, setFormState] = useState(initialForm);

    // Función para manejar los cambios en los inputs del formulario
    const onInputChange = ({ target }) => {
        const { name, value } = target; // Desestructuración para obtener name y value del evento target

        // Actualización del estado formState
        setFormState({
            ...formState, // Mantener el estado anterior
            [name]: value, // Actualizar el campo específico con el nuevo valor
        });
    };

    // Función para resetear el formulario al estado inicial
    const onResetForm = () => {
        setFormState(initialForm); // Restablecer el estado formState al initialForm
    };

    // Retorno del estado y funciones del hook personalizado
    return {
        ...formState, // Devolver todas las propiedades del estado formState individualmente
        formState, // Devolver el estado completo formState
        onInputChange, // Devolver la función de manejo de cambios en los inputs
        onResetForm, // Devolver la función de reseteo del formulario
    };
};


