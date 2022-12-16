import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Input } from '@mui/material';

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

interface FormData {
  email: string;
  name: string;
  password: string;
  passwordCheck: string;
  birthday: string;
  tel: string;
  errors: Errors;
}

const JoinForm = styled.form`
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
`;

const JoinFormContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
      passwordCheck: '',
      birthday: '',
      tel: '',
    },
  });

  const onSubmitHandler = (data: FormData) => console.log(data);

  return (
    <JoinForm onSubmit={handleSubmit(onSubmitHandler)}>
      <InputWrapper>
        <label htmlFor="email">Email</label>
        <Input
          {...(register('email'),
          {
            required: true,
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: '이메일 형식이 맞지 않습니다.',
            },
          })}
          type="email"
          id="email"
          autoComplete="false"
          fullWidth={true}
        ></Input>
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="name">FullName</label>
        <Input {...(register('name'), { required: true })}></Input>
      </InputWrapper>
    </JoinForm>
  );
};

export default JoinFormContainer;
