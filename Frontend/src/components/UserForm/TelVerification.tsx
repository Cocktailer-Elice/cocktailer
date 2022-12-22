import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import {
  TEL_VERIFICATION_END,
  TEL_VERIFICATION_START,
} from '../../constants/api';
import { TelValidation } from '../../constants/regex';
import { timeFormat } from '../../utils/timeFormat';

interface TelVerifierProps {
  telVerificationStart: boolean;
  setTelVerificationStart: React.Dispatch<React.SetStateAction<boolean>>;
  setTelVerificationEnd: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TelVerifier = ({
  telVerificationStart,
  setTelVerificationStart,
  setTelVerificationEnd,
}: TelVerifierProps) => {
  const { getValues } = useFormContext();
  const tel: string = getValues('tel');
  const [code, setCode] = useState('');
  const [time, setTime] = useState(179);
  const [success, setSuccess] = useState(false);

  const startTelVerification = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
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

  const endTelVerification = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(TEL_VERIFICATION_END, { tel, code });
      if (response.status === 204) {
        // 인증 성공
        setTelVerificationStart(false);
        setTelVerificationEnd(true);
        setSuccess(true);
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
    if (telVerificationStart) {
      const counter = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(counter);
    }
  }, [telVerificationStart, time]);

  return (
    <div>
      {telVerificationStart ? (
        <>
          <span>{timeFormat(time)}</span>
          <input
            type="text"
            value={code}
            onChange={onChangeHandler}
            placeholder="인증번호를 입력해주세요"
          />
          <Button onClick={endTelVerification}>인증하기</Button>
        </>
      ) : (
        <>
          <Button onClick={startTelVerification}>전화번호 인증하기</Button>
        </>
      )}
      {success && <span>인증 성공</span>}
    </div>
  );
};