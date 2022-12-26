import { EditForm } from '../../../containers/Edits/EditAvatarContainer';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useAuthentication } from '../../../hooks/useAuthentication';

export const EditAvatar = () => {
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
        <title>Cocktailer | 아바타 변경</title>
      </Helmet>
      <EditForm />
    </>
  );
};
