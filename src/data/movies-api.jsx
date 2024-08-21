import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

axios.defaults.headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWFlM2E4NDMzNjk5N2Q4ZmZiYzJiMTExOWQxMzNhNSIsIm5iZiI6MTcyNDI0MzM4Ni4xNDI0NzcsInN1YiI6IjY2YzVkOGM4ZWY0MTA2Mzg5NzI0ZmUwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HCqG_WFay3XjDUtMeGBaX-uOrfLyyBTDeorI3F--lmI",
  accept: "application/json",
};

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get("/trending/movie/day");
  return data;
};

export const fetchSearchMovie = async (query) => {
  const { data } = await axios.get("/search/movie", {
    params: { query },
  });
  return data;
};

export const fetchMovieDetails = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}`);
  return data;
};

export const fetchMovieCredits = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/credits`);
  return data;
};

export const fetchMovieReviews = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);
  return data;
};
