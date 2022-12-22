import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import { useState } from 'react';

export const SearchCocktailInput = () => {
  const [active, setActive] = useState<boolean>(false);
  const handleSearch = () => {
    setActive(!active);
  };
  return (
    <Search>
      {active ? (
        <TextField
          id="standard-basic"
          placeholder="search..."
          variant="standard"
          style={{}}
        />
      ) : null}
      <SearchIcon fontSize="large" onClick={handleSearch} />
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
