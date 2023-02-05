import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 20px 0 0 20px;
  gap: 10px;
`;

export const Item = styled.li`
  display: inline-block;
  width: 100%;
`;

export const MovieLink = styled(NavLink)`
  display: inline-block;
  padding: 5px 16px;
  color: black;
  text-decoration: none;
  border-radius: 4px;

  :hover,
  :focus {
    color: #0000ff;
  }
`;
