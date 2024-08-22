import { Link, useLocation } from "react-router-dom";

function MovieLink({ movie }) {
  const location = useLocation();
  return (
    <Link state={location} to={`/movies/${movie.id}`}>
      <p>{movie.title}</p>
    </Link>
  );
}

export default MovieLink;
