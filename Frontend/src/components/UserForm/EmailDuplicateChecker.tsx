import { Alert, Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { EMAIL_DUPLICATE_CHECK } from '../../constants/api';
import { EmailValidation } from '../../constants/regex';

interface EmailDuplicateCheckerProps {
  emailDuplicateCheck: boolean | null;
  setEmailDuplicateCheck: React.Dispatch<React.SetStateAction<boolean | null>>;
}

export const EmailDuplicateChecker = ({
  emailDuplicateCheck,
  setEmailDuplicateCheck,
}: EmailDuplicateCheckerProps) => {
  const { getValues } = useFormContext();
  const email = getValues('email');

  const sendEmailDuplicateCheck = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    if (EmailValidation.test(email)) {
      try {
        const response = await axios.post(EMAIL_DUPLICATE_CHECK, { email });
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
      >
        이메일 중복 확인
      </EmailDuplicateCheckButton>
      <EmailDuplicateMessageWrapper>
        {emailDuplicateCheck === null ? (
          <></>
        ) : emailDuplicateCheck === false ? (
          <Alert severity="error">이미 사용중인 이메일입니다</Alert>
        ) : (
          <Alert severity="success">사용 가능한 이메일입니다</Alert>
        )}
      </EmailDuplicateMessageWrapper>
    </>
  );
};

const EmailDuplicateCheckButton = styled(Button)``;

const EmailDuplicateMessageWrapper = styled.div`
  height: max-content;
`;
