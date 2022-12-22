import * as yup from 'yup';
import {
  EmailValidation,
  PasswordValidation,
  TelValidation,
} from '../../constants/regex';

export const JoinSchema = yup.object().shape({
  name: yup.string().required('이름을 입력해주세요'),
  email: yup
    .string()
    .required('이메일을 입력해주세요')
    .matches(EmailValidation, '이메일 형식이 맞지 않습니다'),
  password: yup
    .string()
    .required('비밀번호를 입력해주세요')
    .min(8, '8자 이상의 비밀번호를 입력해주세요')
    .max(16, '16자 이하의 비밀번호를 입력해주세요')
    .matches(
      PasswordValidation,
      '대문자, 특수문자, 숫자가 하나 이상씩 포함되어야 합니다(8자 이상, 16자 이하 규칙 포함)',
    ),
  passwordCheck: yup
    .string()
    .required('확인 비밀번호를 입력해주세요')
    .test('password-match', '비밀번호가 일치하지 않습니다', function (value) {
      return this.parent.password == value;
    }),
  birthday: yup.string().required('생년월일을 선택해주세요'),
  tel: yup
    .string()
    .required('전화번호를 입력해주세요')
    .matches(TelValidation, '전화번호 형식이 맞지 않습니다'),
  alcohol: yup.string(),
});
