import { TextField } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

interface Props {
  handleTextChange: any;
  content: string;
  name: string;
}
export const InputCockContent = ({
  name,
  handleTextChange,
  content,
}: Props) => {
  return (
    <ContentWrapper>
      <TextField
        label="제조법에 대해 적어주세요"
        name={name}
        value={content}
        rows={4}
        multiline
        sx={{ width: '300px' }}
        onChange={(e) => {
          handleTextChange(e);
        }}
      />
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;
