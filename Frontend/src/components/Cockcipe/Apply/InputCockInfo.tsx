import React from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
}

const InputCockInfo = ({ name }: Props) => {
  return (
    <>
      <label htmlFor="input_name">{name}</label>
      <Input id="input_name" type="text" />
    </>
  );
};

export default InputCockInfo;

const Input = styled.input`
  width: 20;
`;
