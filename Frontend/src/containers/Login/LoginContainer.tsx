import { Container } from '@mui/material';
import Finds from '../../components/Login/Finds';
import { LoginForm } from '../../components/Login/LoginForm';
import { FormHeading } from '../../components/UserForm/styles';

export const LoginContainer = () => {
  return (
    <Container>
      <FormHeading>로그인</FormHeading>
      <LoginForm />
      <Finds />
    </Container>
  );
};
