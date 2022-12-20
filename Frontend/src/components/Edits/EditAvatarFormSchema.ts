import * as yup from 'yup';

export const EditAvatarFormSchema = yup.object().shape({
  file: yup.mixed().test('required', '파일을 선택해 주세요', function (value) {
    return value && value.length > 0;
  }),
});
