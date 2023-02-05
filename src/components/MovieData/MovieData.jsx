import {
  ContainerMovieData,
  Box,
  Poster,
  BoxDataMovie,
  ListGenres,
  StyledLink,
  ListLink,
  Title,
} from './MovieData.styled';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { baseImgUrl } from 'services/constans';

export const MovieData = ({ url, tag, title, score, overview, genres }) => {
  return (
    <ContainerMovieData>
      <Box>
        <Poster src={baseImgUrl + url} alt={tag} />

        <BoxDataMovie>
          <h2>{title}</h2>
          <p>User Score: {Math.round(score * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <ListGenres>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ListGenres>
        </BoxDataMovie>
      </Box>
      <Title>Additional information</Title>
      <ListLink>
        <li>
          <StyledLink to="cast">Cast</StyledLink>
        </li>
        <li>
          <StyledLink to="reviews">Reviews</StyledLink>
        </li>
      </ListLink>
      <Outlet />
    </ContainerMovieData>
  );
};

MovieData.propTypes = {
  url: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};
