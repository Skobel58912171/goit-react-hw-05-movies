// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/Api';
import { ListReview, Author } from './Reviews.styled';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchMovieReviews(movieId);

        setReviews(data);
      } catch {
        console.log(Error);
      }
    })();
  }, [movieId]);

  return (
    <>
      {reviews && !!reviews.length ? (
        <ListReview>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <Author>Author: {author}</Author>
              <p>{content}</p>
            </li>
          ))}
        </ListReview>
      ) : (
        <div>We don't have any reviews for this movie</div>
      )}
    </>
  );
};

export default Reviews;
