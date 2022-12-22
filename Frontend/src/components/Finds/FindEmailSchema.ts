import * as yup from 'yup';
import { TelValidation } from '../../constants/regex';

export const FindEmailSchema = yup.object().shape({
  name: yup.string().required('이름을 입력해주세요'),
  tel: yup
    .string()
    .required('전화번호를 입력해주세요')
    .matches(TelValidation, '전화번호 형식이 맞지 않습니다'),
});
