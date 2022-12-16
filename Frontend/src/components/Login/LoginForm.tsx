import { Alert, Button, Input } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';

interface LoginFormValue {
  email: string;
  password: string;
}

const LoginForm = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;
const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  label {
    padding-right: 1rem;
    &::after {
      content: ' : ';
    }
  }
  div {
    flex: 1;
  }
`;

const LoginFormContainer = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormValue>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmitHandler: SubmitHandler<LoginFormValue> = (data) =>
    console.log(data);

  return (
    <LoginForm onSubmit={handleSubmit(onSubmitHandler)}>
      <InputWrapper>
        <label htmlFor="email">Email</label>
        <Input
          {...register('email', {
            required: true,
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          })}
          type="email"
          id="email"
          autoComplete="false"
        ></Input>
      </InputWrapper>
      {errors.email && errors.email.type === 'required' ? (
        <Alert severity="error">이메일을 입력해주세요.</Alert>
      ) : (
        ''
      )}
      <InputWrapper>
        <label htmlFor="password">Password</label>
        <Input
          {...register('password', { required: true })}
          type="password"
          id="password"
          autoComplete="false"
        ></Input>
      </InputWrapper>
      {errors.password && errors.password.type === 'required' ? (
        <Alert severity="error">비밀번호를 입력해주세요.</Alert>
      ) : (
        ''
      )}
      <Button type="submit">로그인</Button>
    </LoginForm>
  );
};

export default LoginFormContainer;
