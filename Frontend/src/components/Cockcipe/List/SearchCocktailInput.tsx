import {
  FormControlLabel,
  FormControl,
  TextField,
  InputAdornment,
  Checkbox,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import React from 'react';

interface Props {
  official: boolean;
  setOfficial: any;
  nonOfficial: boolean;
  setNonOfficial: any;
  handleChange: any;
  handleSearch: any;
  search: string;
}

export const SearchCocktailInput = ({
  official,
  setOfficial,
  nonOfficial,
  setNonOfficial,
  handleChange,
  handleSearch,
  search,
}: Props) => {
  return (
    <Search>
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked
            size="small"
            onChange={() => setOfficial(!official)}
          />
        }
        label="official"
      />
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked
            size="small"
            onChange={() => setNonOfficial(!nonOfficial)}
          />
        }
        label="not-official"
      />
      <FormControl>
        <TextField
          size="small"
          variant="outlined"
          onChange={handleChange}
          onKeyUp={handleSearch}
          value={search}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
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
