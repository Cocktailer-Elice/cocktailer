import { Helmet } from 'react-helmet';
import { EditAvatarForm } from '../../components/Edits/EditAvatarForm';
import { FormHeading } from '../../components/UserForm/styles';

export const EditForm = () => {
  return (
    <>
      <Helmet>
        <title>Cocktailer | 아바타 변경</title>
      </Helmet>
      <FormHeading>아바타 이미지 변경하기</FormHeading>
      <EditAvatarForm />
    </>
  );
};
