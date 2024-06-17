// Función para convertir la primera letra de una palabra en mayúscula
export const primerMayuscula = (word) => {
    // Obtener la primera letra de la palabra y convertirla a mayúscula
    // Concatenar la primera letra en mayúscula con el resto de la palabra
    return word[0].toUpperCase() + word.substring(1);
}
