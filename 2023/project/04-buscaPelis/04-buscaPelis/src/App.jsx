import { useState } from 'react'
import responseMovies from './mocks/results.json'
import withoutResults from './mocks/no-results.json'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='page'>
    <header>
      <h1>BUSCADOR DE PELICULAS</h1>
      <form className='form'>
        <input placeholder='Lilo & Stitch, Buscando a Nemo...'></input>
        <button type='submit'>Buscar</button>
      </form>
    </header>
    <main>
  AQUI VAN LAS PELIS
    </main>
    </div>
  )
}

export default App
