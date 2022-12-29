import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { EMAIL_DUPLICATE_CHECK } from '../../constants/api';
import { EmailValidation } from '../../constants/regex';
import { Alert } from './styles';

interface EmailDuplicateCheckerProps {
  emailDuplicateCheck: boolean | null;
  setEmailDuplicateCheck: React.Dispatch<React.SetStateAction<boolean | null>>;
}

export const EmailDuplicateChecker = ({
  emailDuplicateCheck,
  setEmailDuplicateCheck,
}: EmailDuplicateCheckerProps) => {
  const { getValues } = useFormContext();
  const [email, setEmail] = useState(getValues('email'));
  const sendEmailDuplicateCheck = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    const currentEmail = getValues('email');
    if (EmailValidation.test(currentEmail)) {
      try {
        const response = await axios.post(EMAIL_DUPLICATE_CHECK, {
          email: currentEmail,
        });
        if (response.status === 204) {
          setEmailDuplicateCheck(true);
        }
      } catch (e: any) {
        setEmailDuplicateCheck(false);
      }
    }
  };

  useEffect(() => {
    setEmailDuplicateCheck(null);
  }, [email]);
  return (
    <>
      <EmailDuplicateCheckButton
        onClick={sendEmailDuplicateCheck}
        disabled={Boolean(emailDuplicateCheck)}
        sx={{ padding: '0' }}
      >
        이메일 중복 확인
      </EmailDuplicateCheckButton>
      <EmailDuplicateMessageWrapper>
        {emailDuplicateCheck === null ? (
          <></>
        ) : emailDuplicateCheck === false ? (
          <Alert>이미 사용중인 이메일입니다</Alert>
        ) : (
          <Alert className="success">사용 가능한 이메일입니다</Alert>
        )}
      </EmailDuplicateMessageWrapper>
    </>
  );
};

const EmailDuplicateCheckButton = styled(Button)`
  font-size: 0.7rem;
`;

const EmailDuplicateMessageWrapper = styled.div`
  height: max-content;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
`;
