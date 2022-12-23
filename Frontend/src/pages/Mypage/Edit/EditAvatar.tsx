import { EditForm } from '../../../containers/Edits/EditAvatarContainer';
import { loginChecker } from '../../../utils/loginChecker';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const EditAvatar = () => {
  const isLoggedIn = loginChecker();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn]);
  return <EditForm />;
};
