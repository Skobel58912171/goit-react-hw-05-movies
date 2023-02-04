import PropTypes from 'prop-types';
import { List, Item, MovieLink } from './MovieList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <>
      <List>
        {movies.map(movie => (
          <Item key={movie.id}>
            <MovieLink to={`${movie.id}`}>
              <span>{movie.title}</span>
            </MovieLink>
          </Item>
        ))}
      </List>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
