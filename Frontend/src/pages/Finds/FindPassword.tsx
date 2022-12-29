import { Helmet } from 'react-helmet';
import { FindPasswordForm } from '../../components/Finds/FIndPasswordForm';
import { FormHeading } from '../../components/UserForm/styles';

export const FindPassword = () => {
  return (
    <>
      <Helmet>
        <title>Cocktailer | 비밀번호 찾기</title>
      </Helmet>
      <FormHeading>비밀번호 찾기</FormHeading>
      <FindPasswordForm />
    </>
  );
};
