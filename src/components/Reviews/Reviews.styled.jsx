import styled from 'styled-components';

const ListReview = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  max-width: 1070px;
  border: 2px solid #ccc8c8;
  border-radius: 10px;
  padding: 10px 20px;
  text-align: justify;
`;
const Author = styled.b`
  display: inline-block;
  margin-bottom: 10px;
`;

export { ListReview, Author };
