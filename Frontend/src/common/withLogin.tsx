import { useNavigate } from 'react-router-dom';
import { useAuthentication } from '../hooks/useAuthentication';
import { useCurrentUser } from '../hooks/useCurrentUser';
import { Login } from '../pages/Login/Login';

interface WrappedProps {}

export const withLogin =
  <T extends WrappedProps>(WrappedComponent: React.ComponentType<T>) =>
  (props: T) => {
    const isLoggedIn = useAuthentication();
    const user = useCurrentUser();
    const navigate = useNavigate();
    if (isLoggedIn) {
      if (user?.isPasswordTemporary === true) {
        alert('비밀번호 변경이 필요합니다.');
        navigate('/mypage/change-password');
      }
      return <WrappedComponent {...props} />;
    } else {
      navigate('/login');
      return <Login />;
    }
  };
