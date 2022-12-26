import { Helmet } from 'react-helmet';
import { withLogin } from '../../../common/withLogin';
import { FormHeading } from '../../../components/UserForm/styles';
import { EditPasswordForm } from '../../../components/Edits/EditPasswordForm';

const EditPassword = () => {
  return (
    <>
      <Helmet>
        <title>Cocktailer | 비밀번호 변경</title>
      </Helmet>
      <FormHeading>비밀번호 변경</FormHeading>
      <EditPasswordForm />
    </>
  );
};

export const EditPasswordWithLogin = withLogin(EditPassword);
