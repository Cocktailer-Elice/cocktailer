import { useAppSelector } from '../store/store';

export const useCurrentUser = () => {
  const { user } = useAppSelector((state) => state.auth);
  return user;
};
