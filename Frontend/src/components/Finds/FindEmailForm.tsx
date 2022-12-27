import { FormWrapper, UserForm } from '../UserForm/styles';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserInput } from '../UserForm/UserInput';
import { Button } from '@mui/material';
import { FindEmailSchema } from './FindEmailSchema';
import { useState } from 'react';
import axios from 'axios';
import { FIND_EMAIL } from '../../constants/api';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FindEmailReqData } from '../../../../types';

export const FindEmailForm = () => {
  const navigate = useNavigate();
  const methods = useForm<FindEmailReqData>({
    resolver: yupResolver(FindEmailSchema),
  });
  const { handleSubmit } = methods;
  const [email, setEmail] = useState<string>('');
  const onSubmitHandler = async (data: FindEmailReqData) => {
    const response = await axios.post(FIND_EMAIL, data);
    setEmail(response.data.email);
  };
  return (
    <FormProvider {...methods}>
      <FormWrapper>
        <UserForm onSubmit={handleSubmit(onSubmitHandler)}>
          <UserInput label="name" id="name" name="name" />
          <UserInput
            label="Phone"
            id="tel"
            name="tel"
            placeholder=" - 를 제외하고 입력해 주세요"
          />
          <Button type="submit" disabled={Boolean(email)}>
            이메일 찾기
          </Button>
          {email && (
            <>
              <EmailResult>이메일: {email}</EmailResult>
              <Button onClick={() => navigate('/login')}>
                로그인 하러 가기
              </Button>
            </>
          )}
        </UserForm>
      </FormWrapper>
    </FormProvider>
  );
};

const EmailResult = styled.span`
  width: 100%;
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
`;
