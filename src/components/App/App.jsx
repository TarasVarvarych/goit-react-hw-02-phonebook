import { Routes, Route } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/authApi/operations';
import { PrivateRoute } from 'components/Routes/PrivateRoute';
import { RestrictedRoute } from 'components/Routes/RestrictedRoute';
import { useAuth } from 'hooks/useAuth';
import { Loader } from 'components/Loader/Loader';
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));

export function App() {
  const { isRefreshing } = useAuth();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
      </Route>
    </Routes>
  );
}
