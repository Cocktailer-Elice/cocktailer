import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Alert, Button } from '@mui/material';

interface Errors {
  email: {
    message: string;
  };
  name: {
    message: string;
  };
  password: {
    message: string;
  };
  passwordCheck: {
    message: string;
  };
  tel: {
    message: string;
  };
}

interface JoinFormData {
  email: string;
  name: string;
  password: string;
  passwordCheck: string;
  birthday: string;
  tel: string;
  errors: Errors;
}

const JoinFormWrapper = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JoinFormData>();
  const onSubmitHandler = (data: JoinFormData) => console.log(data);
  return (
    <JoinForm onSubmit={handleSubmit(onSubmitHandler)}>
      <InputWrapper>
        <LabelInputWrapper>
          <InputLabel htmlFor="email">Email</InputLabel>
          <JoinInput
            {...register('email', {
              required: '이메일을 입력해주세요.',
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
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
          ) : null}
        </ErrorWrapper>
      </InputWrapper>
      <InputWrapper>
        <LabelInputWrapper>
          <InputLabel htmlFor="name">Name</InputLabel>
          <JoinInput
            {...register('name', {
              required: '이름을 입력해주세요.',
            })}
            type="text"
            id="name"
          />
        </LabelInputWrapper>
        <ErrorWrapper>
          {errors?.name ? (
            <Alert severity="error">{errors.name.message}</Alert>
          ) : null}
        </ErrorWrapper>
      </InputWrapper>
      <InputWrapper>
        <LabelInputWrapper>
          <InputLabel htmlFor="password">Password</InputLabel>
          <JoinInput
            {...register('password', {
              required: '비밀번호를 입력해주세요.',
              minLength: {
                value: 8,
                message: '8자 이상의 비밀번호를 입력해 주세요.',
              },
              maxLength: {
                value: 16,
                message: '16자 이하의 비밀번호를 입력해 주세요.',
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,16}/,
                message:
                  '특수문자(@ ! $ * ? &) 1자, 대문자 1자, 숫자 1자 이상을 섞어 입력해 주세요.',
              },
            })}
            type="password"
            id="password"
          />
        </LabelInputWrapper>
        <ErrorWrapper>
          {errors?.password ? (
            <Alert severity="error">{errors.password.message}</Alert>
          ) : null}
        </ErrorWrapper>
      </InputWrapper>
      <InputWrapper>
        <LabelInputWrapper>
          <InputLabel htmlFor="passwordCheck">Password Check</InputLabel>
          <JoinInput
            {...register('passwordCheck', {
              required: '비밀번호를 입력해주세요.',
              minLength: {
                value: 8,
                message: '8자 이상의 비밀번호를 입력해 주세요.',
              },
              maxLength: {
                value: 16,
                message: '16자 이하의 비밀번호를 입력해 주세요.',
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,16}/,
                message:
                  '특수문자(@ ! $ * ? &) 1자, 대문자 1자, 숫자 1자 이상을 섞어 입력해 주세요.',
              },
            })}
            type="password"
            id="passwordCheck"
          />
        </LabelInputWrapper>
        <ErrorWrapper>
          {errors?.passwordCheck ? (
            <Alert severity="error">{errors.passwordCheck.message}</Alert>
          ) : null}
        </ErrorWrapper>
      </InputWrapper>
      <InputWrapper>
        <LabelInputWrapper>
          <InputLabel htmlFor="birthday">Birthday</InputLabel>
          <JoinInput
            {...register('birthday', {
              required: '생년월일을 선택해주세요.',
            })}
            type="date"
            id="birthday"
          />
        </LabelInputWrapper>
        <ErrorWrapper>
          {errors?.birthday ? (
            <Alert severity="error">{errors.birthday.message}</Alert>
          ) : null}
        </ErrorWrapper>
      </InputWrapper>
      <InputWrapper>
        <LabelInputWrapper>
          <InputLabel htmlFor="tel">Phone Number</InputLabel>
          <JoinInput
            {...register('tel', {
              required: '휴대전화번호를 입력해주세요.',
              pattern: {
                value: /^\d{3}-\d{3,4}-\d{4}$/,
                message: '전화번호 형식이 맞지 않습니다.',
              },
            })}
            type="text"
            id="tel"
            placeholder=" - 를 포함하여 입력해주세요."
          />
        </LabelInputWrapper>
        <ErrorWrapper>
          {errors?.tel ? (
            <Alert severity="error">{errors.tel.message}</Alert>
          ) : null}
        </ErrorWrapper>
      </InputWrapper>
      <Button type="submit">회원가입</Button>
    </JoinForm>
  );
};

export default JoinFormWrapper;

const JoinForm = styled.form`
  display: flex;
  padding: 1rem;
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
const JoinInput = styled.input.attrs(() => ({ autoComplete: 'false' }))`
  border: none;
  border-bottom: 1px solid black;
  padding-left: 0.5rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
`;
