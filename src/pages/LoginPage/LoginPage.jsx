import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FormInput, FormLabel, LogInBtn, LoginForm } from './LoginPage.styled';
import { logIn } from 'redux/authApi';
import { useAuth } from 'hooks/useAuth';
import { Loader } from 'components/Loader/Loader';

function LoginPage() {
  const dispatch = useDispatch();
  const { isFetching } = useAuth();
  const handleLogInFormSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    dispatch(logIn({ email: email.value, password: password.value }));
    e.target.reset();
  };
  return (
    <>
      {isFetching && <Loader />}
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

export default LoginPage;
