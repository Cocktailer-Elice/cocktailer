import { JoinContainer } from '../../containers/Join/JoinContainer';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useAuthentication } from '../../hooks/useAuthentication';

export const Join = () => {
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
        <title>Cocktailer | 회원가입</title>
      </Helmet>
      <JoinContainer />
    </>
  );
};
