import { Container } from '@mui/material';
import LoginFormWrapper from '../../components/Login/LoginFormWrapper';
import LoginHeader from '../../components/Login/LoginHeader';

const LoginContainer = () => {
  return (
    <Container>
      <LoginHeader></LoginHeader>
      <LoginFormWrapper></LoginFormWrapper>
    </Container>
  );
};

export default LoginContainer;
