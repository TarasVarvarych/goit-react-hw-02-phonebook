import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/authApi/operations';
import styled from 'styled-components';

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
const UserInfo = styled.div`
  display: flex;
  align-items: baseline;

  gap: 20px;
`;

const UserName = styled.p`
  font-size: 24px;
  font-weight: 500;
`;

const LogOutBtn = styled.button`
  height: 40px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: #7da2a9;
  color: white;
  font-weight: 700;
  margin-top: 15px;
  &:hover {
    background-color: black;
    color: #fff;
    scale: 1.05;
  }
`;
