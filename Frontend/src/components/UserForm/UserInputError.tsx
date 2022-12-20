import { Alert } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { ErrorWrapper } from './styles';

export const UserInputError = ({ name }: { name: string }) => {
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <ErrorWrapper>
      {errors?.[name] ? (
        <Alert severity="error">{errors?.[name]?.message as string}</Alert>
      ) : null}
    </ErrorWrapper>
  );
};
