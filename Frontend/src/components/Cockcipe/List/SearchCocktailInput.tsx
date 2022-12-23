import {
  FormControlLabel,
  FormGroup,
  TextField,
  Checkbox,
} from '@mui/material';
import styled from 'styled-components';
import { useState } from 'react';

export const SearchCocktailInput = () => {
  return (
    <Search>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="official"
      />
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="not-official"
      />
      <TextField
        id="standard-basic"
        placeholder="search..."
        variant="standard"
        style={{ width: '100px', marginRight: '10px' }}
      />
    </Search>
  );
};

const Search = styled.div`
  display: flex;
  justify-content: flex-end;
  border-radius: 5px;
  width: 100%;
  margin-left: 0px;
`;
