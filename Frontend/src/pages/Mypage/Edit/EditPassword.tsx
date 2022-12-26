import { EditPasswordContainer } from '../../../containers/Edits/EditPasswordContainer';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useAuthentication } from '../../../hooks/useAuthentication';

export const EditPassword = () => {
  const isLoggedIn = useAuthentication();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn]);
  return (
    <>
      <Helmet>
        <title>Cocktailer | 비밀번호 변경</title>
      </Helmet>
      <EditPasswordContainer />
    </>
  );
};
