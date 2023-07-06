
//importa dependencias
import axios from 'axios';

//funciones de llamada a la API
//.get
// exportamos la funcion bringProducts
//las llamadas a la API son funciones asincronas SIEMPRE, requieren de un tiempo. Funcion flecha
export const bringProducts = async () => {
    //axios.get devuelve una promesa, se utiliza await para esperar a que se resuelva y obtener respuesta del servidor
    return await axios.get(`https://rickandmortyapi.com/api/character/?page=17`);
};
// bringProducts "almacena" la solicitud a la API, esta nos devuelve una promesa, asi que para acceder a los datos, tendre que hacer un .then, si la promesa se cumple: response.data

//Esto es un ejemplo de como enviamos un body por axios en un protocolo POST
export const loginMe = async (credentials) => {
    // (credentials) sera un objeto que contenga la informacion de inicio de sesion)
    return await axios.post(`https://backend-connect-arte.vercel.app/user/login`, credentials);
    // .POST envia el objeto credentials como el cuerpo de la solicitud. 
}


export const searchCharacter = async (criteria) => {
    return await axios.get(`https://rickandmortyapi.com/api/character/?name=${criteria}`);
}
// utiliza como criterio de busqueda 'criteria' que en este caso sera el nombre (?name=)