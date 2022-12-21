import React, { ReactHTMLElement, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from 'styled-components';
import {
  FormControl,
  InputLabel,
  Select,
  TextField,
  MenuItem,
} from '@mui/material';

interface Props {
  kind: string;
}

export const InputRecipe = ({ kind }: Props) => {
  const [count, setCount] = useState<number[]>([0]);
  const handleAddRecipe = () => {
    setCount((prev) => [...prev, 0]);
  };
  return (
    <>
      <RecipeHeader>{kind === 'alcohol' ? '알코올' : '음료수'}</RecipeHeader>
      <RecipeContainer>
        <FormControl
          variant="standard"
          sx={{
            width: '100px',
            marginRight: '10px',
          }}
        >
          <InputLabel>재료 선택</InputLabel>
          <Select label="카테고리">
            <MenuItem>앱솔루트</MenuItem>
            <MenuItem>보드카</MenuItem>
            <MenuItem>잭다니엘</MenuItem>
            <MenuItem>발렌타인</MenuItem>
          </Select>
        </FormControl>
        <TextField label="용량" variant="standard" type="number" />
        <AddIcon onClick={handleAddRecipe} />
      </RecipeContainer>
      {count &&
        count.map((item, idx) => (
          <RecipeContainer key={idx}>
            <FormControl
              variant="standard"
              sx={{
                width: '100px',
                marginRight: '10px',
              }}
            >
              <InputLabel>재료 선택</InputLabel>
              <Select label="카테고리">
                <MenuItem>앱솔루트</MenuItem>
                <MenuItem>보드카</MenuItem>
                <MenuItem>잭다니엘</MenuItem>
                <MenuItem>발렌타인</MenuItem>
              </Select>
            </FormControl>
            <TextField label="용량" variant="standard" type="number" />
            <AddIcon onClick={handleAddRecipe} />
          </RecipeContainer>
        ))}
    </>
  );
};

const RecipeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RecipeHeader = styled.div`
  font-size: 20px;
  margin-right: 10px;
`;

const AddStr = `<RecipeContainer>
<FormControl
  variant="standard"
  sx={{
    width: '100px',
    marginRight: '10px',
  }}
>
  <InputLabel>재료 선택</InputLabel>
  <Select label="카테고리">
    <MenuItem>앱솔루트</MenuItem>
    <MenuItem>보드카</MenuItem>
    <MenuItem>잭다니엘</MenuItem>
    <MenuItem>발렌타인</MenuItem>
  </Select>
</FormControl>
<TextField label="용량" variant="standard" type="number" />
<AddIcon onClick={handleAddRecipe} />
</RecipeContainer>`;
