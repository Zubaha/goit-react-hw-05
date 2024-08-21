import css from "./MovieCast.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../../data/movies-api";
import { TbPhotoCancel } from "react-icons/tb";

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getMovieCredits = async () => {
      try {
        const dataCast = await fetchMovieCredits(movieId);
        setCast(dataCast.cast || []);
      } catch (err) {
        console.log(err);
      }
    };
    getMovieCredits();
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.map((actor) => {
          const imageActor = actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : "";
          return (
            <li key={actor.id}>
              {actor.profile_path ? (
                <img src={imageActor} alt={actor.name} className={css.image} />
              ) : (
                <div>
                  <TbPhotoCancel size={80} color="black" />
                </div>
              )}
              <h4>{actor.name}</h4>
              <p>(Character: {actor.character})</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MovieCast;
