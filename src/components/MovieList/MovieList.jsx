import MovieBackdropPath from "../MovieLink/MovieLink";

function MovieList({ movies }) {
  return (
    <div>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <MovieBackdropPath movie={movie} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MovieList;
