import { useAuth } from 'hooks/useAuth';
import { HeroTitle, HomePageText } from './HomePage.styled';

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
