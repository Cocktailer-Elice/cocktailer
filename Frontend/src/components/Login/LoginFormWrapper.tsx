import { Alert, Button } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { EmailValidation } from '../../constants/regex';

interface LoginFormData {
  email: string;
  password: string;
}

const LoginFormWrapper = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmitHandler: SubmitHandler<LoginFormData> = (data) =>
    console.log(data);

  return (
    <LoginForm onSubmit={handleSubmit(onSubmitHandler)}>
      <InputWrapper>
        <LabelInputWrapper>
          <InputLabel htmlFor="email">Email</InputLabel>
          <LoginInput
            {...register('email', {
              required: '이메일을 입력해 주세요.',
              pattern: {
                value: EmailValidation,
                message: '이메일 형식이 맞지 않습니다.',
              },
            })}
            type="email"
            id="email"
          />
        </LabelInputWrapper>
        <ErrorWrapper>
          {errors?.email ? (
            <Alert severity="error">{errors.email.message}</Alert>
          ) : (
            ''
          )}
        </ErrorWrapper>
      </InputWrapper>
      <InputWrapper>
        <LabelInputWrapper>
          <InputLabel htmlFor="password">Password</InputLabel>
          <LoginInput
            {...register('password', { required: '비밀번호를 입력해주세요.' })}
            type="password"
            id="password"
          />
        </LabelInputWrapper>
      </InputWrapper>
      <ErrorWrapper>
        {errors?.password ? (
          <Alert severity="error">{errors.password.message}</Alert>
        ) : (
          ''
        )}
      </ErrorWrapper>
      <Button type="submit">로그인</Button>
    </LoginForm>
  );
};

export default LoginFormWrapper;

const LoginForm = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;
const InputWrapper = styled.div``;
const LabelInputWrapper = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
`;
const InputLabel = styled.label`
  &::after {
    content: ' : ';
  }
`;
const ErrorWrapper = styled.div`
  min-height: 32px;
`;
const LoginInput = styled.input.attrs(() => ({ autoComplete: 'false' }))`
  border: none;
  border-bottom: 1px solid black;
  padding-left: 0.5rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
`;
