import { Loader } from 'components/Loader/Loader';
import { Navigation } from 'components/Navigation/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header } from './SharedLayour.styled';

function SharedLayout() {
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
}

export default SharedLayout;
