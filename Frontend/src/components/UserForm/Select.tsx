import { useFormContext } from 'react-hook-form';
import { BottomLineSelect, LabelInputWrapper } from './styles';
import { UserInputError } from './UserInputError';

interface SelectProps {
  id: string;
  label: string;
  name: string;
  options: string[];
}

export const Select = ({ id, label, name, options }: SelectProps) => {
  const { register } = useFormContext();
  return (
    <div>
      <LabelInputWrapper>
        <label htmlFor={id}>{label}</label>
        <BottomLineSelect {...register(name)} id={id}>
          {options.map((v) => (
            <option value={v} key={v}>
              {v}
            </option>
          ))}
        </BottomLineSelect>
      </LabelInputWrapper>
      <UserInputError name={name} />
    </div>
  );
};
