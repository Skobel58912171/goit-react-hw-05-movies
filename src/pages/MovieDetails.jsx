import { BackLink } from 'components/BackLink';
import { MovieData } from 'components/MovieData/MovieData';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/Api';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const ref = useRef(location.state?.from ?? '/movies');

  const { movieId } = useParams();
  useEffect(() => {
    async function fetchMoviesById() {
      try {
        const data = await fetchMovieDetails(movieId);

        setMovieDetails(data);
      } catch {
        console.log(Error);
      }
    }
    fetchMoviesById();
  }, [movieId]);

  return (
    <>
      <BackLink to={ref.current}>Go back</BackLink>
      {movieDetails && (
        <MovieData
          url={movieDetails.poster_path}
          tag={movieDetails.title}
          title={movieDetails.title}
          score={movieDetails.vote_average}
          overview={movieDetails.overview}
          genres={movieDetails.genres}
        />
      )}
    </>
  );
};

export default MovieDetails;
