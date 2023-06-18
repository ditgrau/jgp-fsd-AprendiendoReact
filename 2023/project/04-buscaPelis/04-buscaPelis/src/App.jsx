import responseMovies from './mocks/results.json'
import { Movies } from './components/Movies'
import './App.css'

function App() {

const movies = responseMovies.Search
//lo que hago con el mappedMovies es transformar los datos de la API a como yo quiera nombrarlos para no depender tanto de la API, y en el caso de cambiar, solo cambiarlo aqui
const mappedMovies = movies?.map(movie => ({
  id: movie.imdbID,
  title: movie.Title,
  year: movie.Year,
  poster: movie.Poster
}))

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
        <Movies movies={mappedMovies}/>
      </main>
    </div>
  )
}

export default App
