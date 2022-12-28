import { TextField } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

interface Props {
  setContent: any;
  content: string;
}
export const InputCockContent = ({ setContent, content }: Props) => {
  return (
    <ContentContainer>
      <TextField
        label="제조법에 대해 적어주세요"
        placeholder="레몬 몇조각..."
        rows={4}
        multiline
        value={content}
        inputProps={{ maxLength: 300 }}
        error={content === '' ? true : false}
        sx={{ width: '440px' }}
        onChange={(e) => setContent(e.target.value)}
      />
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;
