// import { AiOutlineSearch } from 'react-icons/ai';
// import { Thumb, Form, Field, Btn } from './Movies.styled';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from 'services/Api';
import { MoviesList } from 'components/MoviesList/MovieList';
const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get('query');
    if (!searchQuery) {
      return;
    }
    fetchSearchMovie(searchQuery).then(setMovies);
  }, [searchParams]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    setSearchParams({ query });
  };

  return (
    <>
      <h2>Search</h2>
      <div>
        <form onSubmit={handleSubmitForm}>
          <button type="submit">Search</button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
            value={query}
          />
        </form>
        <MoviesList movies={movies} />
      </div>
    </>
  );
};

export default Movies;
