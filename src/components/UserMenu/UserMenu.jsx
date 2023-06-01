import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { LogOutBtn, UserInfo, UserName } from './UserMenu.styled';
import { logOut } from 'redux/authApi';
import { Loader } from 'components/Loader/Loader';

export function UserMenu() {
  const dispatch = useDispatch();
  const { isFetching } = useAuth();
  const { user, isLoggedIn } = useAuth();
  const handleLogOutUser = () => {
    dispatch(logOut());
  };
  return (
    <>
      {isFetching && <Loader />}
      {isLoggedIn && (
        <UserInfo>
          <UserName>Hello, {user.name}</UserName>
          <LogOutBtn onClick={handleLogOutUser}>Logout</LogOutBtn>
        </UserInfo>
      )}
    </>
  );
}
