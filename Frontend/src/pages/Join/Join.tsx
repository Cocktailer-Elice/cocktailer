import { JoinContainer } from '../../containers/Join/JoinContainer';
import { loginChecker } from '../../utils/loginChecker';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Join = () => {
  const isLoggedIn = loginChecker();
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn]);
  return (
    <>
      <JoinContainer></JoinContainer>
    </>
  );
};
