import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { NavList, NavigationLink } from './Navigation.styled';

export function Navigation() {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavList>
        <li>
          <NavigationLink to="/">Home</NavigationLink>
        </li>
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
