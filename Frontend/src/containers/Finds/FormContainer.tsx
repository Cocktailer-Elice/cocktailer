import { Helmet } from 'react-helmet';
import { FindEmailForm } from '../../components/Finds/FindEmailForm';
import { FindPasswordForm } from '../../components/Finds/FIndPasswordForm';
import { FormHeading } from '../../components/UserForm/styles';

interface FormContainerProps {
  type: '이메일' | '비밀번호';
}

export const FormContainer = ({ type }: FormContainerProps) => {
  return (
    <>
      <Helmet>
        <title>Cocktailer | {type} 찾기</title>
      </Helmet>
      <FormHeading>{type} 찾기</FormHeading>
      {type === '이메일' ? <FindEmailForm /> : <FindPasswordForm />}
    </>
  );
};
