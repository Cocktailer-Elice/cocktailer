import { useFormContext } from 'react-hook-form';
import { Alert, ErrorWrapper } from './styles';

export const UserInputError = ({ name }: { name: string }) => {
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <ErrorWrapper>
      {errors?.[name] && <Alert>{errors?.[name]?.message as string}</Alert>}
    </ErrorWrapper>
  );
};
