const { default: styled } = require('styled-components');

export const UserInfo = styled.div`
  display: flex;
  align-items: baseline;

  gap: 20px;
`;

export const UserName = styled.p`
  font-size: 24px;
  font-weight: 500;
`;

export const LogOutBtn = styled.button`
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
