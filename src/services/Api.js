import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const apiKey = '3cf4425b2b0aaed10ba0111b9a0340c9';

export const fetchTrendingMovies = async () => {
  const resp = await axios.get(`trending/movie/day?api_key=${apiKey}`);

  return resp.data.results;
};

export const fetchSearchMovie = async query => {
  const resp = await axios.get(
    `search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`
  );

  return resp.data.results;
};

export const fetchMovieDetails = async id => {
  const resp = await axios.get(`movie/${id}?api_key=${apiKey}&language=en-US`);

  return resp.data;
};

export const fetchMovieCredits = async id => {
  const resp = await axios.get(
    `movie/${id}/credits?api_key=${apiKey}&language=en-US`
  );

  return resp.data.cast;
};

export const fetchMovieReviews = async id => {
  const resp = await axios.get(
    `movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`
  );

  return resp.data.results;
};
