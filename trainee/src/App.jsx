import React, { useEffect, useState } from 'react';
import './App.css'

const GIPHY_API_KEY = "yUYpnEro1XNdysZiZIXT70Cnz3wQuMf4";

function App() { //no es una arrow function

  const [catFact, setCatFact] = useState('')

  const callApi = () => {
    fetch('https://catfact.ninja/fact') //funcion que devuelve una promesa (axios haria esta funcion)
      .then(res => res.json()) //primera promesa para que te devuelva json
      // .then(data => console.log(data.fact)) //segunda para que te devuelva la info
      .then (data=> setCatFact(data.fact))
      //la actualizacion del valor inicial con la info de la API
  }

  useEffect( //primer argumento una funcion, segundo las dependencias
    callApi, //como callApi esta aqui metida, con cada actualizacion se vuelve a renderizar y vuelve a llamar a la API
    []
  )
  useEffect (callGiphy, [callApi])

  return ( //todas las funciones llevan un return, con al menos un div vacio
    <div className='title'> {catFact} 
    {/* //valor de la variable del useState, con cada actualizacion se ejecuta el set que esta en el useEffect */}
    </div>
  )
}



export default App // si no la exporto en la declaracion la tengo que exportar aqui

//TEST EN TO END