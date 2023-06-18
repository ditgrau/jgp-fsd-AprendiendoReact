import responseMovies from './mocks/results.json'
import { Movies } from './components/Movies'
import './App.css'

function App() {
//aqui deberia ir la busqueda de la API (?)
const movies = responseMovies.Search
//este es el objeto que le pasamos a ListOfMovies de argumento, es un array de objetos
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
        <Movies movies={movies}/>
      </main>
    </div>
  )
}

export default App
