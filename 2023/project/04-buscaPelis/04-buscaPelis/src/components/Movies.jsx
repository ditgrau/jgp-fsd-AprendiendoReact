
function ListOfMovies({ movies }) {
    //recibe un objeto desestructurado 'movies' como argumento, viene de .Search y es un array de objetos
    return (
        <ul>
            {/* devolvemos una lista desordenada */}
            {
                movies.map(movie => (
                    <li key={movie.id}>
                        {/* las propiedades ya no llaman al objeto de la API llaman a mi mappedMovies */}
                        <h2>{movie.title}</h2>
                        <p>{movie.year}</p>
                        <img src={movie.poster} alt={movie.title} />
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
            ? <ListOfMovies movies={movies} />
            : <NoMoviesResults />
    )
}