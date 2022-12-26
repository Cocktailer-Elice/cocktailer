import { useAppSelector } from '../store/store';

export const useAuthentication = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  return isLoggedIn;
};
