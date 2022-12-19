import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { UserForm } from '../UserForm/styles';
import { UserCreateData } from '../../../../types';
import { UserInput } from '../UserForm/UserInput';
import { Select } from '../UserForm/Select';
import { Button } from '@mui/material';
import { JoinSchema } from './JoinSchema';
import { EmailValidationButton } from '../UserForm/utils';
import axios from 'axios';
import { EmailValidation, TelValidation } from '../../constants/regex';

export const JoinForm = () => {
  const methods = useForm<UserCreateData>({
    resolver: yupResolver(JoinSchema),
    mode: 'onChange',
  });
  const {
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = methods;

  const [emailDuplicateCheck, setEmailDuplicateCheck] = useState(false);
  const [telVerifyStart, setTelVerifyStart] = useState(false);
  const [isVerfiedTel, setIsVerifiedTel] = useState(false);

  const onSubmitHandler = (data: UserCreateData) => {
    console.log(data);
    reset();
  };

  const sendEmailDuplicateCheck = async () => {
    const currentEmail = getValues('email');
    if (EmailValidation.test(currentEmail)) {
      const response = await axios.post(
        'http://localhost:8000/auth/email-check',
        { email: currentEmail },
      );
      if (response.status === 400) {
        setEmailDuplicateCheck(false);
      } else {
        setEmailDuplicateCheck(true);
      }
    } else {
      errors.email && (errors.email.message = '이메일 형식이 맞지 않습니다');
    }
  };

  const sendTelVerifyStart = async () => {
    const currentTel = getValues('tel');
    if (TelValidation.test(currentTel)) {
      const response = await axios.post(
        'http://localhost:8000/auth/send-code',
        { tel: currentTel },
      );
      if (response.status === 400) {
        setTelVerifyStart(false);
      } else {
        setTelVerifyStart(true);
      }
    } else {
      errors.tel && (errors.tel.message = '전화번호 형식이 맞지 않습니다');
    }
  };

  const sendTelVerifyEnd = async () => {};

  return (
    <FormProvider {...methods}>
      <UserForm onSubmit={handleSubmit(onSubmitHandler)}>
        <UserInput id="name" label="name" name="name" />
        <UserInput id="email" label="email" name="email" type="email" />
        <EmailValidationButton
          emailDuplicateCheck={emailDuplicateCheck}
          sendEmailDuplicateCheck={sendEmailDuplicateCheck}
        />
        <UserInput
          id="password"
          label="password"
          name="password"
          type="password"
        />
        <UserInput
          id="passwordCheck"
          label="password check"
          name="passwordCheck"
          type="password"
        />
        <UserInput id="birthday" label="birthday" name="birthday" type="date" />
        <UserInput
          id="tel"
          label="phone"
          name="tel"
          placeholder=" - 를 제외하고 입력해주세요"
        />
        <Select
          id="alcohol"
          label="nickname prefix"
          name="alcohol"
          options={['랜덤', '진', '럼', '보드카', '위스키', '브랜디', '데킬라']}
        />
        <Button type="submit">회원가입</Button>
      </UserForm>
    </FormProvider>
  );
};
