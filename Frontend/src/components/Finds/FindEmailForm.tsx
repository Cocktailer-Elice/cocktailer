import { UserForm } from '../UserForm/styles';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserInput } from '../UserForm/UserInput';
import { Button } from '@mui/material';
import { FindEmailSchema } from './FindEmailSchema';
import { useState } from 'react';
import axios from 'axios';
import { FIND_EMAIL } from '../../constants/api';

interface FindEmailFormData {
  name: string;
  tel: string;
}

export const FindEmailForm = () => {
  const methods = useForm<FindEmailFormData>({
    resolver: yupResolver(FindEmailSchema),
  });
  const { handleSubmit } = methods;
  const [email, setEmail] = useState<string>('');
  const onSubmitHandler = async (data: FindEmailFormData) => {
    const response = await axios.post(FIND_EMAIL, data);
    setEmail(response.data);
  };
  return (
    <FormProvider {...methods}>
      <UserForm onSubmit={handleSubmit(onSubmitHandler)}>
        <UserInput label="name" id="name" name="name" />
        <UserInput
          label="Phone"
          id="tel"
          name="tel"
          placeholder=" - 를 제외하고 입력해 주세요"
        />
        <Button type="submit">이메일 찾기</Button>
        {email && <span>{email}</span>}
      </UserForm>
    </FormProvider>
  );
};
