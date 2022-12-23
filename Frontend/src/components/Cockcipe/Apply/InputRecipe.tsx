import React, { ReactHTMLElement, useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import styled from 'styled-components';
import { FormControl, InputLabel, TextField, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';
import { number } from 'yup/lib/locale';

interface Props {
  kind: string;
  setSelect: any;
  setTitle: any;
  setValue: any;
  select: any;
  title: any;
  value: any;
}

export const InputRecipe = ({
  kind,
  select,
  title,
  value,
  setSelect,
  setTitle,
  setValue,
}: Props) => {
  const [count, setCount] = useState<number[]>([0]);
  const [ingredient, setIngredient] = useState<string[]>();
  const [alcohol, setAlcohol] = useState<string[]>();

  const handleAddRecipe = () => {
    setCount((prev) => [...prev, 0]);
  };

  const handleSelectChange = (event: any, index: number) => {
    console.log(event.target.value);
    setSelect((prev: any) => [
      ...prev.slice(0, index),
      event.target.value,
      ...prev.slice(index + 1),
    ]);
  };

  const handleTitleChange = (event: any, index: number) => {
    setTitle((prev: any) => [
      ...prev.slice(0, index),
      event.target.value,
      ...prev.slice(index + 1),
    ]);
  };
  const handleValueChange = (event: any, index: number) => {
    setValue((prev: any) => [
      ...prev.slice(0, index),
      event.target.value,
      ...prev.slice(index + 1),
    ]);
  };
  const handleDelete = (event: any) => {
    if (event.currentTarget.parentElement.id === event.currentTarget.id) {
      setCount(
        count.filter(
          (cnt, idx) => idx !== parseInt(event.currentTarget.parentElement.id),
        ),
      );
      setSelect(
        select.filter(
          (item, idx) => idx !== parseInt(event.currentTarget.parentElement.id),
        ),
      );

      setTitle(
        title.filter(
          (item, idx) => idx !== parseInt(event.currentTarget.parentElement.id),
        ),
      );

      setValue(
        value.filter(
          (item, idx) => idx !== parseInt(event.currentTarget.parentElement.id),
        ),
      );
    }
  };

  useEffect(() => {
    axios.get('http://localhost:8000/api/ingredients').then((res) => {
      setIngredient(res.data.getIngredient.ingredient);
      setAlcohol(res.data.getIngredient.alcohol);
    });
  }, []);

  return (
    <>
      <RecipeHeader>{kind === 'alcohol' ? '알코올' : '음료수'}</RecipeHeader>
      <AddIcon onClick={handleAddRecipe} />
      {count &&
        count.map((item, idx) => (
          <RecipeContainer id={idx.toString()} key={idx}>
            <FormControl
              variant="standard"
              sx={{
                width: '100px',
                marginRight: '10px',
              }}
            >
              <InputLabel>재료 선택</InputLabel>
              <Select
                label="카테고리"
                value={select[idx]}
                onChange={(event) => handleSelectChange(event, idx)}
              >
                {kind === 'alcohol'
                  ? alcohol?.map((item, idx) => (
                      <MenuItem value={item} key={idx}>
                        {item}
                      </MenuItem>
                    ))
                  : ingredient?.map((item, idx) => (
                      <MenuItem value={item} key={idx}>
                        {item}
                      </MenuItem>
                    ))}
              </Select>
            </FormControl>
            <TextField
              label="제품명"
              variant="standard"
              type="text"
              value={title[idx]}
              sx={{ marginRight: '10px;' }}
              onChange={(e) => handleTitleChange(e, idx)}
            />
            <TextField
              label="용량"
              variant="standard"
              type="number"
              value={value[idx]}
              onChange={(e) => handleValueChange(e, idx)}
            />
            <ClearIcon id={idx.toString()} onClick={handleDelete} />
          </RecipeContainer>
        ))}
    </>
  );
};

// onBlur={() => {
//   getRecipe({
//     ratio: { select, title, value },
//   });
// }}
const RecipeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RecipeHeader = styled.div`
  font-size: 20px;
  margin-right: 10px;
`;
