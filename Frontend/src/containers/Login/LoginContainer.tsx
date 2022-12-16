import { Container } from '@mui/material';
import LoginForm from '../../components/Login/LoginForm';
import LoginHeader from '../../components/Login/LoginHeader';

const LoginContainer = () => {
  return (
    <Container>
      <LoginHeader></LoginHeader>
      <LoginForm></LoginForm>
    </Container>
  );
};

export default LoginContainer;
