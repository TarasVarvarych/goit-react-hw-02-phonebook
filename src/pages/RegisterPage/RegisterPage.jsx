import { useDispatch } from 'react-redux';
import { signUp } from 'redux/authApi/operations';
import {
  FormInput,
  FormLabel,
  RegisterBtn,
  RegisterForm,
} from './RegisterPage.styled';

function RegisterPage() {
  const dispatch = useDispatch();
  const handleRegisterFormSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    dispatch(
      signUp({ name: name.value, email: email.value, password: password.value })
    );
    e.target.reset();
  };

  return (
    <RegisterForm onSubmit={handleRegisterFormSubmit}>
      <FormLabel>
        Name
        <FormInput name="name" type="text" placeholder="Your Name" />
      </FormLabel>
      <FormLabel>
        Email
        <FormInput
          name="email"
          type="email"
          placeholder="Your Email"
          required
        />
      </FormLabel>
      <FormLabel>
        Password
        <FormInput
          name="password"
          type="password"
          minLength="7"
          placeholder="Your Password"
          required
        />
      </FormLabel>
      <RegisterBtn type="submit">Register</RegisterBtn>
    </RegisterForm>
  );
}

export default RegisterPage;
