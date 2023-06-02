import { Container } from 'components/SharedLayout/SharedLayour.styled';
import { BackToHomeBtn, ErrorText } from './NotFoundPage.styled';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <Container>
      <ErrorText>Sorry, this page dont exists</ErrorText>
      <Link to="/">
        <BackToHomeBtn type="button">Back to homepage</BackToHomeBtn>
      </Link>
    </Container>
  );
}
export default PageNotFound;
