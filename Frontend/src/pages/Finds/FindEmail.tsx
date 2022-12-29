import { Helmet } from 'react-helmet';
import { FindEmailForm } from '../../components/Finds/FindEmailForm';
import { FormHeading } from '../../components/UserForm/styles';

export const FindEmail = () => {
  return (
    <>
      <Helmet>
        <title>Cocktailer | 이메일 찾기</title>
      </Helmet>
      <FormHeading>이메일 찾기</FormHeading>
      <FindEmailForm />
    </>
  );
};
