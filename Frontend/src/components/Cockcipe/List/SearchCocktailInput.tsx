import {
  FormControlLabel,
  FormGroup,
  TextField,
  Checkbox,
} from '@mui/material';
import styled from 'styled-components';

interface Props {
  official: boolean;
  setOfficial: any;
  nonOfficial: boolean;
  setNonOfficial: any;
}

export const SearchCocktailInput = ({
  official,
  setOfficial,
  nonOfficial,
  setNonOfficial,
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
