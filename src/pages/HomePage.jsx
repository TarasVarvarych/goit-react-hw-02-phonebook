import { useAuth } from 'hooks/useAuth';
import styled from 'styled-components';

function HomePage() {
  const { isLoggedIn, user } = useAuth();
  return (
    <>
      <HeroTitle>PhoneBook</HeroTitle>
      {isLoggedIn ? (
        <HomePageText>Welcome back, {user.name}.</HomePageText>
      ) : (
        <HomePageText>
          This tool designed to help you manage your contacts effectively.
          Please, log in or register to continue.
        </HomePageText>
      )}
    </>
  );
}

export default HomePage;

const HeroTitle = styled.h1`
  letter-spacing: 0.4rem;
  font-family: serif;
`;

const HomePageText = styled.p`
  font-size: 20px;
`;
