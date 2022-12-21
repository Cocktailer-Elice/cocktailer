import { TextField } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

export const InputCockContent = () => {
  return (
    <ContentContainer>
      <TextField
        label="제조법에 대해 적어주세요"
        placeholder="레몬 몇조각..."
        rows={4}
        multiline
        sx={{ width: '300px' }}
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
