import { Container } from 'components/App/App.styled';
import { Loader } from 'components/Loader/Loader';
import { Navigation } from 'components/Navigation/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

function SharedLayout() {
  return (
    <Container>
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
}
export default SharedLayout;
