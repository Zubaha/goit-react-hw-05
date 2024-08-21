import css from "./MovieDetailsPage.module.css";
import { fetchMovieDetails } from "../../data/movies-api";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { NavLink, Outlet, useParams } from "react-router-dom";
import Section from "../../components/Section/Section";
import Loader from "../../components/Loader/Loader";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const release_date = movieDetails.release_date
    ? new Date(movieDetails.release_date)
    : null;
  const imageMoviePoster = movieDetails.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
    : "https://via.placeholder.com/200x300?text=No+Image+Available";
  const voteAverage = movieDetails.vote_average
    ? Math.round(movieDetails.vote_average * 10)
    : null;

  useEffect(() => {
    const getMovieDetails = async () => {
      setLoading(true);
      try {
        const data = await fetchMovieDetails(movieId);
        setMovieDetail(data);
      } catch (err) {
        console.log(err);
        toast.error("Sorry! Please, can try again later.");
      } finally {
        setLoading(false);
      }
    };
    getMovieDetails();
  }, [movieId]);

  return (
    <Section>
      {loading && <Loader />}
      <GoBackBtn />
      <div className={css.wrapper}>
        <img
          src={imageMoviePoster}
          alt={movieDetails.original_title}
          className={css.image}
        />
        <div className={css.wrapperDetail}>
          <h2>
            {movieDetails.original_title}{" "}
            {release_date && `(${release_date.getFullYear()})`}
          </h2>
          <p>
            Use Score:{" "}
            {voteAverage !== null ? `${voteAverage}%` : "Not Available"}
          </p>
          <h3>Overview:</h3>
          <p>{movieDetails.overview}</p>
          <h3>Genres:</h3>
          <ul>
            {movieDetails.genres &&
              movieDetails.genres.map((genre) => {
                return <li key={genre.id}>{genre.name}</li>;
              })}
          </ul>
        </div>
      </div>
      <div>
        <h3>Additional information</h3>
        <div className={css.list}>
          <NavLink to="cast" className={css.link}>
            Cast
          </NavLink>
          <NavLink to="reviews" className={css.link}>
            Reviews
          </NavLink>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </Section>
  );
}

export default MovieDetailsPage;
