import { Loader } from 'components/Loader/Loader';
import { Navigation } from 'components/Navigation/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

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

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  padding-bottom: 1000px;
`;

const Header = styled.header`
  border-bottom: 2px solid #7da2a9;
`;
export default SharedLayout;
