import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const ContainerMovieData = styled.div`
  padding: 10px 50px;
`;

const Box = styled.div`
  display: flex;
  gap: 16px;
  max-width: 1090px;
  padding-bottom: 12px;
  padding-left: 20px;
  border: 2px solid #ccc8c8;
  border-radius: 10px;
`;
const Poster = styled.img`
  width: 240px;
  height: 320px;
  border: 2px solid #fff;
  border-radius: 14px;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.5);
`;

const BoxDataMovie = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 0 20px;
`;

const ListGenres = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
`;
const ListLink = styled.ul`
  list-style: none;
`;
const Title = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 500;
`;
const StyledLink = styled(NavLink)`
  display: inline-block;
  padding: 3px 10px;
  margin-bottom: 10px;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.5);

  border-radius: 10px;
  color: #000000;
  text-decoration: none;
  text-align: center;
  width: 80px;
  :hover,
  :focus {
    color: #ffffff;
    background-color: #a8a8ee;
  }
`;
export {
  ContainerMovieData,
  Box,
  Poster,
  BoxDataMovie,
  ListGenres,
  StyledLink,
  Title,
  ListLink,
};
