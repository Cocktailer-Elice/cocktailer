import { Helmet } from 'react-helmet';
import { withLogin } from '../../../common/withLogin';
import { FormHeading } from '../../../components/UserForm/styles';
import { EditAvatarForm } from '../../../components/Edits/EditAvatarForm';

const EditAvatar = () => {
  return (
    <>
      <Helmet>
        <title>Cocktailer | 아바타 변경</title>
      </Helmet>
      <FormHeading>아바타 변경</FormHeading>
      <EditAvatarForm />
    </>
  );
};

export const EditAvatarWithLogin = withLogin(EditAvatar);
