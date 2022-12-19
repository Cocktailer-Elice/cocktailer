import { UserForm } from '../UserForm/styles';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginReqData } from '../../../../types';
import { UserInput } from '../UserForm/UserInput';
import { Button } from '@mui/material';
import { LoginSchema } from './LoginSchema';

export const LoginForm = () => {
  const methods = useForm<LoginReqData>({
    resolver: yupResolver(LoginSchema),
    mode: 'onChange',
  });
  const { handleSubmit, reset } = methods;
  const onSubmitHandler = (data: LoginReqData) => {
    console.log(data);
    reset();
  };
  return (
    <FormProvider {...methods}>
      <UserForm onSubmit={handleSubmit(onSubmitHandler)}>
        <UserInput id="email" label="Email" type="email" name="email" />
        <UserInput
          id="password"
          label="password"
          type="password"
          name="password"
        />
        <Button type="submit">로그인</Button>
      </UserForm>
    </FormProvider>
  );
};
