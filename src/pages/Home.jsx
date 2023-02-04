import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MovieList';
import { fetchTrendingMovies } from 'services/Api';
const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await fetchTrendingMovies();

        setMovies(data.results);
      } catch {
        console.log(Error);
      }
    }
    fetchMovies();
  }, []);
  return (
    <main>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
