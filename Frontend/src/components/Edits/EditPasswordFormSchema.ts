import * as yup from 'yup';
import { PasswordValidation } from '../../constants/regex';

export const EditPasswordFormSchema = yup.object().shape({
  password: yup.string().required('현재 비밀번호를 입력해주세요'),
  newPassword: yup
    .string()
    .required('새 비밀번호를 입력해주세요')
    .min(8, '8자 이상의 비밀번호를 입력해주세요')
    .max(16, '16자 이하의 비밀번호를 입력해주세요')
    .matches(
      PasswordValidation,
      '대문자, 특수문자, 숫자가 하나 이상씩 포함되어야 합니다(8자 이상, 16자 이하 규칙 포함)',
    )
    .test('password-different', '기존 비밀번호와 동일합니다', function (value) {
      return this.parent.password !== value;
    }),
  newPasswordCheck: yup
    .string()
    .required('확인 비밀번호를 입력해주세요')
    .test('password-match', '비밀번호가 일치하지 않습니다', function (value) {
      return this.parent.password === value;
    })
    .test('password-different', '기존 비밀번호와 동일합니다', function (value) {
      return this.parent.password !== value;
    }),
});
