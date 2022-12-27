import { FormWrapper, UserForm } from '../UserForm/styles';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginReqData } from '../../../../types';
import { UserInput } from '../UserForm/UserInput';
import { Button } from '@mui/material';
import { LoginSchema } from './LoginSchema';

interface LoginFormProps {
  login: (data: LoginReqData) => void;
}

export const LoginForm = ({ login }: LoginFormProps) => {
  const methods = useForm<LoginReqData>({
    resolver: yupResolver(LoginSchema),
    mode: 'onChange',
  });
  const { handleSubmit, reset } = methods;
  const onSubmitHandler = (data: LoginReqData) => {
    login(data);
    reset();
  };
  return (
    <FormProvider {...methods}>
      <FormWrapper>
        <UserForm onSubmit={handleSubmit(onSubmitHandler)}>
          <UserInput id="email" label="Email" type="email" name="email" />
          <UserInput
            id="password"
            label="password"
            type="password"
            name="password"
          />
          <UserInput
            id="isAutoLogin"
            label="auto login"
            name="isAutoLogin"
            type="checkbox"
            inputStyle={{ width: 'max-content' }}
          />
          <Button type="submit">로그인</Button>
        </UserForm>
      </FormWrapper>
    </FormProvider>
  );
};
