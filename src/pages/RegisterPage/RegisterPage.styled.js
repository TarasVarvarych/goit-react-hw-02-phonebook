const { default: styled } = require('styled-components');

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  font-size: 24px;
  font-weight: 500;
`;
export const FormInput = styled.input`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  background-color: #7da2a9;
  border-radius: 5px;
  border: transparent;
  outline: none;
  padding: 10px;
  font-size: 20px;
`;
export const RegisterBtn = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: black;
  color: white;
  font-weight: 700;
  margin-top: 15px;
  &:hover {
    background-color: white;
    color: black;
    scale: 1.05;
  }
`;
