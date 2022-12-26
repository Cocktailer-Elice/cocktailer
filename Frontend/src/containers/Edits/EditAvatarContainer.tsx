import { EditAvatarForm } from '../../components/Edits/EditAvatarForm';
import { FormHeading } from '../../components/UserForm/styles';

export const EditForm = () => {
  return (
    <>
      <FormHeading>아바타 이미지 변경하기</FormHeading>
      <EditAvatarForm />
    </>
  );
};
