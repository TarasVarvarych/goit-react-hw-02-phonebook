import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from 'redux/authApi/operations';
import styled from 'styled-components';

function LoginPage() {
  const dispatch = useDispatch();
  const handleLogInFormSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    dispatch(logIn({ email: email.value, password: password.value }));
    e.target.reset();
  };
  return (
    <>
      <LoginForm onSubmit={handleLogInFormSubmit}>
        <FormLabel>
          Login
          <FormInput name="email" type="email" placeholder="Enter your email" />
        </FormLabel>
        <FormLabel>
          Password
          <FormInput
            name="password"
            type="password"
            placeholder="Enter your password"
          />
        </FormLabel>
        <LogInBtn type="submit">Log In</LogInBtn>
      </LoginForm>
      <p>
        Don't have account yet? Please, <Link to="/register">register</Link>.
      </p>
    </>
  );
}

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  font-size: 24px;
  font-weight: 500;
`;
const FormInput = styled.input`
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
const LogInBtn = styled.button`
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
export default LoginPage;
