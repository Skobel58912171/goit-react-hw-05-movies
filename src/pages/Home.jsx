import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MovieList';
import { fetchTrendingMovies } from 'services/Api';
import { Loader } from 'components/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const data = await fetchTrendingMovies();

        setMovies(data);
      } catch {
        console.log(Error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);
  return (
    <main>
      <h1>Trending today</h1>
      {isLoading ? <Loader /> : <MoviesList movies={movies} />}
    </main>
  );
};

export default Home;
