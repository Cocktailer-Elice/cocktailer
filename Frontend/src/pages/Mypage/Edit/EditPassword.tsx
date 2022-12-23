import { EditPasswordContainer } from '../../../containers/Edits/EditPasswordContainer';
import { loginChecker } from '../../../utils/loginChecker';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const EditPassword = () => {
  const isLoggedIn = loginChecker();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn]);
  return <EditPasswordContainer />;
};
