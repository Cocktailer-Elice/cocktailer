import { useNavigate } from 'react-router-dom';
import { useAuthentication } from '../hooks/useAuthentication';
import { Login } from '../pages/Login/Login';

interface WrappedProps {}

export const withLogin =
  <T extends WrappedProps>(WrappedComponent: React.ComponentType<T>) =>
  (props: T) => {
    const isLoggedIn = useAuthentication();
    const navigate = useNavigate();
    if (isLoggedIn) {
      return <WrappedComponent {...props} />;
    } else {
      navigate('/login');
      return <Login />;
    }
  };
