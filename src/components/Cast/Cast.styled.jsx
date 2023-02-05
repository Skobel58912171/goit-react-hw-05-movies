import styled from 'styled-components';

const ListCast = styled.ul`
  display: grid;
  list-style: none;
  max-width: 1140px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  column-gap: 10px;
  gap: 20px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;
const ItemCast = styled.li`
  position: relative;
`;

const Profile = styled.img`
  width: 240px;
  height: 320px;
  border-radius: 14px;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.5);
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    transform: scale(1.03);
  }
`;
export { ListCast, ItemCast, Profile };
