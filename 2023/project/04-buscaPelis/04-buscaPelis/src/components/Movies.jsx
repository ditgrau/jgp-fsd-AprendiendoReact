
function ListOfMovies({ movies }) {
    //recibe un objeto desestructurado 'movies' como argumento, viene de .Search y es un array de objetos
    return (
        <ul>
            {/* devolvemos una lista desordenada */}
            {
                movies.map(movie => ( 
                    //map porque es un array de objetos, cada elemento del array es 'movie'
                    //pongo directamente () porque es el valor a retornar, lleva implicito el return
                    <li key={movie.imdbID}>
                        {/* por cada movie devuelvo un elemento de la lista 'ul' */}
                        <h2>{movie.Title}</h2>
                        <p>{movie.Type}</p>
                        <img src={movie.Poster} alt={movie.Title} />
                    </li>
                ))
            }
        </ul>
    )
}

function NoMoviesResults() {
    //funcion para cuando la busqueda no da resultados
    return <p>No se han encontrado resultados</p>
}

//esto es el componente que exportamos
// y le entra como argumento el array de objetos
export function Movies({ movies }) {
    // guardamos el valor de la ternaria en hasMovies para saber si hay algo en el array
    const hasMovies = movies?.length > 0

    return (
        //devolvemos la constante hasMovies, si viene con TRUE
    hasMovies
        ? <ListOfMovies movies={movies}/>
        : <NoMoviesResults/>
    )
}