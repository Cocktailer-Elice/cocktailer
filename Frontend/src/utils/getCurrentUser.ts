import { useAppSelector } from '../store/store';

export const getCurrentUser = () => {
  const { user } = useAppSelector((state) => state.auth);
  return user;
};
