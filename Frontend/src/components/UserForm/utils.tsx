import { Button } from '@mui/material';
import { useState } from 'react';

interface EmailValidationButtonProps {
  emailDuplicateCheck: boolean;
  sendEmailDuplicateCheck: () => Promise<void>;
}

export const EmailValidationButton = ({
  emailDuplicateCheck,
  sendEmailDuplicateCheck,
}: EmailValidationButtonProps) => {
  return (
    <Button
      variant="contained"
      onClick={sendEmailDuplicateCheck}
      disabled={emailDuplicateCheck}
    >
      {!emailDuplicateCheck ? '이메일 중복 확인' : '이용 가능한 이메일입니다'}
    </Button>
  );
};

interface TelVerificationProps {
  telVerifyStart: boolean;
  isVerifiedTel: boolean;
  sendTelVerifyStart: () => Promise<void>;
  sendTelVerifyEnd: () => Promise<void>;
}

export const TelVerification = ({
  telVerifyStart,
  isVerifiedTel,
  sendTelVerifyStart,
  sendTelVerifyEnd,
}: TelVerificationProps) => {
  const [verificationNumber, setVerificationNumber] = useState('');
  return <div>{!telVerifyStart ? <></> : <></>}</div>;
};

// interface TelVerificationButtonProps {
//   telCheck: boolean;
//   sendTelCheck: () => Promise<void>;
// }

// export const TelVerificationButton = ({
//   telCheck,
//   sendTelCheck,
// }: TelVerificationButtonProps) => {
//   return (
//     <Button variant="contained" disabled={telCheck} onClick={sendTelCheck}>
//       전화번호 인증
//     </Button>
//   );
// };

// const TelVerification = ({
//   telCheck,
//   sendTelCheck,
// }: TelVerificationButtonProps) => {
//   return (
//     <div>
//       {telCheck ? <div>
//         <input type="text" />
//       </div> : null}
//       {!telCheck ? (
//         <TelVerificationButton
//           telCheck={telCheck}
//           sendTelCheck={sendTelCheck}
//         />
//       ) : (
//         <Button disabled={telCheck}>인증 완료</Button>
//       )}
//     </div>
//   );
// };
