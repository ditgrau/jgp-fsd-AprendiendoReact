import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import './App.css'



function App() {

  const { movies: mappedMovies } = useMovies()

  const handleSubmit = (event) => {
    event.preventDefault()
    //preventDefault, evita que la pagina se recargue al enviar (comportamiento por defecto)
    const fields = Object.fromEntries(new window.FormData(event.target))
    //crea un objeto 'fields' a partir de las entradas del form, asignando clave: valor, donde la clave sera el 'name' del input
    console.log(fields)
  }

  return (
    <div className='page'>
      <header>
        <h1>BUSCADOR DE PELICULAS</h1>
        <form className='form' onSubmit={handleSubmit}>
          {/* la funcion se ejecutara cuando se envie el formulario, onSubmit */}
          <input name='query' placeholder='Lilo & Stitch, Buscando a Nemo...'></input>
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App
