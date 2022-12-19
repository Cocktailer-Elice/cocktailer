import React from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
}

export const InputCockInfo = ({ name }: Props) => {
  return (
    <>
      <label htmlFor="input_name">{name}</label>
      <Input id="input_name" type="text" />
    </>
  );
};

const Input = styled.input`
  width: 20;
`;
