import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
  email: yup.string().required('이메일을 입력해주세요'),
  password: yup.string().required('비밀번호를 입력해주세요'),
});
