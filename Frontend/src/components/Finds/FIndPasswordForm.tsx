import { FormWrapper, UserForm } from '../UserForm/styles';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserInput } from '../UserForm/UserInput';
import { Button } from '@mui/material';
import { FindPasswordSchema } from './FindPasswordSchema';
import { useState } from 'react';
import axios from 'axios';
import { TelVerifier } from '../UserForm/TelVerification';
import { FindPasswordReqData } from '../../../../types';
import { VERIFY_USER } from '../../constants/api';
import { useNavigate } from 'react-router-dom';

export const FindPasswordForm = () => {
  const methods = useForm<FindPasswordReqData>({
    resolver: yupResolver(FindPasswordSchema),
  });
  const navigate = useNavigate();
  const [telVerificationEnd, setTelVerificationEnd] = useState(false);
  const onSubmit = async (data: FindPasswordReqData) => {
    if (telVerificationEnd) {
      const response = await axios.post(VERIFY_USER, data);
      if (response.status === 204) {
        alert('임시비밀번호가 메일로 전송됩니다. 로그인 페이지로 이동합니다.');
        navigate('/login');
      }
    } else {
      alert('전화번호 인증을 해주세요');
    }
  };
  return (
    <FormProvider {...methods}>
      <FormWrapper>
        <UserForm onSubmit={methods.handleSubmit(onSubmit)}>
          <UserInput id="name" label="name" name="name" />
          <UserInput id="email" label="email" name="email" type="email" />
          <UserInput
            id="tel"
            label="Phone"
            name="tel"
            placeholder=" - 를 제외하고 입력해 주세요"
          />
          <TelVerifier
            type="users"
            setTelVerificationEnd={setTelVerificationEnd}
          />
          <Button type="submit">비밀번호 찾기</Button>
        </UserForm>
      </FormWrapper>
    </FormProvider>
  );
};
