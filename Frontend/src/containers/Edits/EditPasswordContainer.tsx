import { EditPasswordForm } from '../../components/Edits/EditPasswordForm';
import { FormHeading } from '../../components/UserForm/styles';

export const EditPasswordContainer = () => {
  return (
    <>
      <FormHeading>비밀번호 변경하기</FormHeading>
      <EditPasswordForm />
    </>
  );
};
