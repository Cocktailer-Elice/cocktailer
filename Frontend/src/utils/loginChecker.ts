import { useAppSelector } from '../store/store';

export const loginChecker = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  return isLoggedIn;
};
