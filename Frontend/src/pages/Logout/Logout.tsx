import { useEffect } from 'react';
import { useAppDispatch } from '../../store/store';
import { userLogout } from '../../store/authActions';
import { useNavigate } from 'react-router-dom';
import { loginChecker } from '../../utils/loginChecker';

export const Logout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(userLogout());
    navigate('/');
  }, []);
  return <div></div>;
};
