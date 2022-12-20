import { Helmet } from 'react-helmet';
import { JoinForm } from '../../components/Join/JoinForm';
import { FormHeading } from '../../components/UserForm/styles';

export const JoinContainer = () => {
  return (
    <>
      <Helmet>
        <title>Cocktailer | 회원가입</title>
      </Helmet>
      <FormHeading>회원가입</FormHeading>
      <JoinForm />
    </>
  );
};
