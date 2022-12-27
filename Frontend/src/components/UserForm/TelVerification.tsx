import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import {
  TEL_VERIFICATION_END,
  TEL_VERIFICATION_START,
} from '../../constants/api';
import { TelValidation } from '../../constants/regex';
import { timeFormat } from '../../utils/timeFormat';
import { BottomLineInput } from './styles';

interface TelVerifierProps {
  setTelVerificationEnd: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TelVerifier = ({ setTelVerificationEnd }: TelVerifierProps) => {
  const { getValues } = useFormContext();
  const [telVerificationStart, setTelVerificationStart] = useState(false);
  const [code, setCode] = useState('');
  const [time, setTime] = useState(179);
  const [success, setSuccess] = useState(false);

  const startTelVerification = async (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.TouchEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    const tel = getValues<string>('tel');
    if (TelValidation.test(tel)) {
      try {
        const response = await axios.post(TEL_VERIFICATION_START, { tel });
        if (response.status === 204) {
          setTelVerificationStart(true);
        }
      } catch (e: any) {
        setTelVerificationStart(false);
      }
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 7) {
      setCode(e.target.value);
    }
  };

  const endTelVerification = async (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.TouchEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    try {
      if (Number(code) < 100000 && Number(code) > 999999) {
        alert('인증번호는 6자리 숫자입니다.');
        return;
      } else {
        const response = await axios.post(TEL_VERIFICATION_END, {
          tel: getValues('tel'),
          code,
        });
        if (response.status === 204) {
          // 인증 성공
          setTelVerificationStart(false);
          setTelVerificationEnd(true);
          setSuccess(true);
        }
      }
    } catch (e: any) {
      // 인증 실패
      alert('인증번호가 틀립니다. 다시 시도해주세요.');
      setTelVerificationStart(false);
      setTelVerificationEnd(false);
      setSuccess(false);
    }
  };

  useEffect(() => {
    if (telVerificationStart && time > 0) {
      const counter = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(counter);
    }
  }, [telVerificationStart, time]);

  return (
    <div>
      {telVerificationStart ? (
        <Wrapper>
          <span>{timeFormat(time)}</span>
          <BottomLineInput
            type="text"
            value={code}
            onChange={onChangeHandler}
            placeholder="인증번호를 입력해주세요"
          />
          <VerifyButton onClick={endTelVerification}>인증하기</VerifyButton>
        </Wrapper>
      ) : (
        <Wrapper>
          <VerifyButton onClick={startTelVerification}>
            전화번호 인증하기
          </VerifyButton>
        </Wrapper>
      )}
      {success && <span>인증 성공</span>}
    </div>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VerifyButton = styled(Button)`
  font-size: 0.7rem;
`;
