import { LoginContainer } from '../../containers/Login/LoginContainer';
import { Helmet } from 'react-helmet';
import { FormHeading } from '../../components/UserForm/styles';
import { useAuthentication } from '../../hooks/useAuthentication';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
      <FormHeading>로그인</FormHeading>
      <LoginContainer />
    </>
  );
};
