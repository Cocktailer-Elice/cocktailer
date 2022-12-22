import React, { ReactHTMLElement, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from 'styled-components';
import { FormControl, InputLabel, TextField, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
interface Recipe {
  name: string;
  capacity: number;
}

interface Props {
  kind: string;
  ingred: string;
  setIngred: any;
}

export const InputRecipe = ({ kind, ingred, setIngred }: Props) => {
  const [count, setCount] = useState<number[]>([0]);
  const handleAddRecipe = () => {
    setCount((prev) => [...prev, 0]);
  };
  const handleChange = (event: SelectChangeEvent) => {
    setIngred(event.target.value);
  };
  return (
    <>
      <RecipeHeader>{kind === 'alcohol' ? '알코올' : '음료수'}</RecipeHeader>
      <AddIcon onClick={handleAddRecipe} />
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
              <Select label="카테고리" value={ingred} onChange={handleChange}>
                <MenuItem value="진">진</MenuItem>
                <MenuItem value="럼">럼</MenuItem>
                <MenuItem value="보드카">보드카</MenuItem>
                <MenuItem value="위스키">위스키</MenuItem>
                <MenuItem value="브랜디">브랜디</MenuItem>
                <MenuItem value="데킬라">데킬라</MenuItem>
                <MenuItem value="맥주">맥주</MenuItem>
                <MenuItem value="와인">와인</MenuItem>
                <MenuItem value="샴페인">샴페인</MenuItem>
                <MenuItem value="소주">소주</MenuItem>
                <MenuItem value="리큐르">리큐르</MenuItem>
                <MenuItem value="비터스">비터스</MenuItem>
              </Select>
            </FormControl>
            <TextField label="용량" variant="standard" type="number" />
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
