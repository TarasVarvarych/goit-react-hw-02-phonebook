import { useSelector } from 'react-redux';
import {
  selectIsFetching,
  selectIsLoading,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from 'redux/selectors';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
    user: useSelector(selectUser),
    isLoading: useSelector(selectIsLoading),
    isFetching: useSelector(selectIsFetching),
  };
};
