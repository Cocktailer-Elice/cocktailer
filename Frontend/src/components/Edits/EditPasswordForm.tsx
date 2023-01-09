import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormWrapper, UserForm } from '../UserForm/styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { EditPasswordFormSchema } from './EditPasswordFormSchema';
import { UserInput } from '../UserForm/UserInput';
import { Button } from '@mui/material';
import axios from 'axios';
import { ChangePasswordReqData } from '../../../../types';
import { CHANGE_PASSWORD } from '../../constants/api';
import { Toast } from '../../common/Toast';

export const EditPasswordForm = () => {
  const methods = useForm<ChangePasswordReqData>({
    resolver: yupResolver(EditPasswordFormSchema),
    mode: 'onChange',
  });
  const navigate = useNavigate();
  const { handleSubmit, getValues } = methods;
  const onSubmit = async () => {
    const response = await axios.patch(CHANGE_PASSWORD, {
      password: getValues('password'),
      newPassword: getValues('newPassword'),
    });
    if (response.status === 204) {
      // alert('다시 로그인해주세요');
      Toast({
        message: '다시 로그인해주세요',
        isSuccess: true,
        duration: 2000,
      });
      navigate('/logout');
    } else {
      alert('비밀번호 변경 실패');
    }
  };
  return (
    <FormProvider {...methods}>
      <FormWrapper>
        <UserForm onSubmit={handleSubmit(onSubmit)}>
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
      </FormWrapper>
    </FormProvider>
  );
};
