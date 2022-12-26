import { UserForm } from '../UserForm/styles';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserInput } from '../UserForm/UserInput';
import { Button } from '@mui/material';
import { FindPasswordSchema } from './FindPasswordSchema';
import { useState } from 'react';
import axios from 'axios';

export const FindPasswordForm = () => {
  const methods = useForm({ resolver: yupResolver(FindPasswordSchema) });
  return (
    <FormProvider {...methods}>
      <UserForm>
        <UserInput id="name" label="name" name="name" />
        <UserInput id="email" label="email" name="email" type="email" />
        <UserInput
          id="tel"
          label="Phone"
          name="tel"
          placeholder=" - 를 제외하고 입력해 주세요"
        />
        <Button type="submit">비밀번호 찾기</Button>
      </UserForm>
    </FormProvider>
  );
};
