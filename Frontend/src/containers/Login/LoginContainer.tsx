import { Container } from '@mui/material';
import Finds from '../../components/Login/Finds';
import LoginFormWrapper from '../../components/Login/LoginFormWrapper';
import LoginHeader from '../../components/Login/LoginHeader';

const LoginContainer = () => {
  return (
    <Container>
      <LoginHeader></LoginHeader>
      <LoginFormWrapper></LoginFormWrapper>
      <Finds></Finds>
    </Container>
  );
};

export default LoginContainer;
