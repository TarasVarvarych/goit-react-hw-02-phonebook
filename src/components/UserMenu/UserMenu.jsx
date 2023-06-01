import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { LogOutBtn, UserInfo, UserName } from './UserMenu.styled';
import { logOut } from 'redux/authApi';

export function UserMenu() {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useAuth();
  const handleLogOutUser = () => {
    dispatch(logOut());
  };
  return (
    isLoggedIn && (
      <UserInfo>
        <UserName>Hello, {user.name}</UserName>
        <LogOutBtn onClick={handleLogOutUser}>Logout</LogOutBtn>
      </UserInfo>
    )
  );
}
