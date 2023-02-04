import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/Api';

const MovieDetails = () => {
  const { movieId } = useParams();
  useEffect(() => {
    async function fetchMoviesById() {
      try {
        const data = await fetchMovieDetails(movieId);

        console.log(data);
      } catch {
        console.log(Error);
      }
    }
    fetchMoviesById();
  }, [movieId]);

  return (
    <>
      <h2>Movie</h2>
    </>
  );
};

export default MovieDetails;
