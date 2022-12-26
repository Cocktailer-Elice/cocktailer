import { LoginContainer } from '../../containers/Login/LoginContainer';
import { loginChecker } from '../../utils/loginChecker';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const isLoggedIn = loginChecker();
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn]);
  return <LoginContainer></LoginContainer>;
};
