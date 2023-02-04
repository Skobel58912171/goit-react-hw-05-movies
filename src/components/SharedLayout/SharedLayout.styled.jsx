import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: start;

  padding: 20px 60px;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.5);
  font-size: 24px;

  > nav {
    display: flex;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 5px 16px;
  color: black;
  text-decoration: none;
  border-radius: 4px;

  &.active {
    color: #fff;
    background-color: #0000ff;
  }
  :hover:not(.active),
  :focus:not(.active) {
    color: #0000ff;
  }
`;
