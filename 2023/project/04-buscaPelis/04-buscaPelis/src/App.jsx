import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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

    </main>
    </div>
  )
}

export default App