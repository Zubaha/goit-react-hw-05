import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../data/movies-api";

function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const gethMovieReviews = async () => {
      try {
        const dataReviews = await fetchMovieReviews(movieId);
        setReviews(dataReviews.results);
      } catch (err) {
        console.log(err);
      }
    };
    gethMovieReviews();
  }, [movieId]);

  return (
    <div>
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => {
            return (
              <li key={review.id}>
                <h4>{review.author}</h4>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Sorry. But there are no reviews for this film yet.</p>
      )}
    </div>
  );
}

export default MovieReviews;
