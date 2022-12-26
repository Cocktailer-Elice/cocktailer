import { UserForm } from '../UserForm/styles';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginReqData } from '../../../../types';
import { UserInput } from '../UserForm/UserInput';
import { Button } from '@mui/material';
import { LoginSchema } from './LoginSchema';
import { userLogin } from '../../store/authActions';
import { useAppDispatch } from '../../store/store';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthentication } from '../../hooks/useAuthentication';

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const methods = useForm<LoginReqData>({
    resolver: yupResolver(LoginSchema),
    mode: 'onChange',
  });
  const isLoggedIn = useAuthentication();
  const { handleSubmit, reset } = methods;
  const onSubmitHandler = (data: LoginReqData) => {
    dispatch(userLogin(data));
    reset();
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [navigate, isLoggedIn]);
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
        <UserInput
          id="isAutoLogin"
          label="auto login"
          name="isAutoLogin"
          type="checkbox"
        />
        <Button type="submit">로그인</Button>
      </UserForm>
    </FormProvider>
  );
};
