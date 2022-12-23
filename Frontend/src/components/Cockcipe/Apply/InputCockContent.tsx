import { TextField } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

export const InputCockContent = ({ setContent }) => {
  return (
    <ContentContainer>
      <TextField
        label="제조법에 대해 적어주세요"
        placeholder="레몬 몇조각..."
        rows={4}
        multiline
        sx={{ width: '300px' }}
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
