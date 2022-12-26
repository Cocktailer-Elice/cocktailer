import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserForm } from '../UserForm/styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { EditPasswordFormSchema } from './EditPasswordFormSchema';
import { UserInput } from '../UserForm/UserInput';
import { Button } from '@mui/material';
import axios from 'axios';
import { ChangePasswordReqData } from '../../../../types';
import { CHANGE_PASSWORD } from '../../constants/api';

export const EditPasswordForm = () => {
  const methods = useForm<ChangePasswordReqData>({
    resolver: yupResolver(EditPasswordFormSchema),
    mode: 'onChange',
  });
  const navigate = useNavigate();
  const { handleSubmit, getValues } = methods;
  const sendPasswordChangeRequest = async () => {
    const response = await axios.patch(CHANGE_PASSWORD, {
      password: getValues('password'),
      newPassword: getValues('newPassword'),
    });
    if (response.status === 400) {
      alert('다시 로그인해주세요');
      navigate('/logout');
    } else {
      alert('Server Error');
    }
  };
  const onSubmitHandler = () => {
    sendPasswordChangeRequest();
  };
  return (
    <FormProvider {...methods}>
      <UserForm onSubmit={handleSubmit(onSubmitHandler)}>
        <UserInput
          label="password"
          id="password"
          name="password"
          type="password"
          placeholder="현재 비밀번호"
        />
        <UserInput
          label="new password"
          id="newPassword"
          name="newPassword"
          type="password"
          placeholder="새 비밀번호"
        />
        <UserInput
          label="new password check"
          id="newPasswordCheck"
          name="newPasswordCheck"
          type="password"
          placeholder="새 비밀번호 확인"
        />
        <Button type="submit">비밀번호 변경하기</Button>
      </UserForm>
    </FormProvider>
  );
};
