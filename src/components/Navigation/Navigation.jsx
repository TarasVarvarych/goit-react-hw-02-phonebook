import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export function Navigation() {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavList>
        {isLoggedIn ? (
          <>
            <li>
              <NavigationLink to="/contacts">Contacts</NavigationLink>
            </li>
            <li>
              <UserMenu />
            </li>
          </>
        ) : (
          <>
            <li>
              <NavigationLink to="/login">Login</NavigationLink>
            </li>
            <li>
              <NavigationLink to="/register">Register</NavigationLink>
            </li>
          </>
        )}
      </NavList>
    </nav>
  );
}

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavigationLink = styled(NavLink)`
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
