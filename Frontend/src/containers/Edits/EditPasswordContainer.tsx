import { Helmet } from 'react-helmet';
import { EditPasswordForm } from '../../components/Edits/EditPasswordForm';
import { FormHeading } from '../../components/UserForm/styles';

export const EditPasswordContainer = () => {
  return (
    <>
      <Helmet>
        <title>Cocktailer | 비밀번호 변경</title>
      </Helmet>
      <FormHeading>비밀번호 변경하기</FormHeading>
      <EditPasswordForm />
    </>
  );
};
