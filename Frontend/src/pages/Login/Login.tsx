import { LoginContainer } from '../../containers/Login/LoginContainer';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useAuthentication } from '../../hooks/useAuthentication';

export const Login = () => {
  const isLoggedIn = useAuthentication();
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn]);
  return (
    <>
      <Helmet>
        <title>Cocktailer | 로그인</title>
      </Helmet>
      <LoginContainer />
    </>
  );
};
