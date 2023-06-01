import { NavLink } from 'react-router-dom';

const { default: styled } = require('styled-components');

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  &:hover {
    color: #7da2a9;
  }
  &.active {
    color: #7da2a9;
    text-decoration: underline;
  }
`;
