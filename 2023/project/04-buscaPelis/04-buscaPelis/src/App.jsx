import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import './App.css'



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
