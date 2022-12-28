import { useFormContext } from 'react-hook-form';
import { BottomLineInput, LabelInputWrapper } from './styles';
import { UserInputError } from './UserInputError';

interface InputProps {
  id: string;
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  inputStyle?: React.CSSProperties;
}

export const UserInput = ({
  id,
  label,
  name,
  type = 'text',
  placeholder = '',
  inputStyle,
}: InputProps) => {
  const { register } = useFormContext();
  return (
    <div>
      <LabelInputWrapper>
        <label htmlFor={id}>{label}</label>
        <BottomLineInput
          {...register(name)}
          type={type}
          id={id}
          placeholder={placeholder}
          style={inputStyle}
        />
      </LabelInputWrapper>
      <UserInputError name={name} />
    </div>
  );
};
