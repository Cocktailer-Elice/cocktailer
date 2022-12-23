import { loginChecker } from './loginChecker';
import { useAppDispatch } from '../store/store';
import { userRefresh } from '../store/authActions';

export const loginRefresh = async () => {
  const isLoggedIn = loginChecker();
  const dispatch = useAppDispatch();
  const cookie = document.cookie;

  if (!isLoggedIn && cookie) {
    dispatch(userRefresh());
  }
};
