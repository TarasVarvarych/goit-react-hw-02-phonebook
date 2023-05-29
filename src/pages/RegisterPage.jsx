import { useDispatch } from 'react-redux';
import { signUp } from 'redux/authApi/operations';
import styled from 'styled-components';

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

const RegisterForm = styled.form`
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
const RegisterBtn = styled.button`
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

export default RegisterPage;
