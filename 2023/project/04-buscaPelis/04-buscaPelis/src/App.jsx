import responseMovies from './mocks/results.json'
import withoutResults from './mocks/no-results.json'
import './App.css'

function App() {
  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0

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
        {
          hasMovies
            ? (
              <ul>
                {
                  movies.map(movie => (
                    <li key={movie.imdbID}>
                      <h2>{movie.Title}</h2>
                      <p>{movie.Type}</p>
                      <img src={movie.Poster} alt={movie.Title}/>
                    </li>
                  ))
                }
              </ul>
            )
            : (
             <p>No se han encontrado resultados</p> 
            )
  }
      </main>
    </div>
  )
}

export default App
