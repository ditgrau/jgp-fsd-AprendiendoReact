import responseMovies from './mocks/results.json'
import { Movies } from './components/Movies'
import './App.css'

// esto es un custom hook 'use'
export function useMovies () {
  const movies = responseMovies.Search
  //este mapeo crea un nuevo objeto para cada pelicula, con id, title, year y poster
  const mappedMovies = movies?.map(movie => ({
    // el operador ?se asegura de un true, descarta undefined y null
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  return {movies: mappedMovies}
  //devuelve el objeto movies con el array de objetos mappedMovies
}

function App() {

  const {movies: mappedMovies} = useMovies()
  // extraemos el objeto movies y el array que contiene, devuelto por useMovies y lo almacenamos en una const, para poder usarlo en el componente Movies

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
