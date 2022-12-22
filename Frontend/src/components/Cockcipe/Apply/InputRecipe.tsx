import React, { ReactHTMLElement, useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import styled from 'styled-components';
import { FormControl, InputLabel, TextField, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';

interface Props {
  kind: string;
  getRecipe: any;
}

export const InputRecipe = ({ kind, getRecipe }: Props) => {
  const [count, setCount] = useState<number[]>([0]);
  const [ingredient, setIngredient] = useState<string[]>();
  const [alcohol, setAlcohol] = useState<string[]>();

  const [select, setSelect] = useState<string>('');
  const [title, setTitle] = useState<string>();
  const [value, setValue] = useState<string>();

  const handleAddRecipe = () => {
    setCount((prev) => [...prev, 0]);
  };
  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value);
  };
  const handleDelete = (event: any) => {
    console.log(event.currentTarget.parentElement);
    if (event.currentTarget.parentElement.id === event.currentTarget.id) {
      setCount(
        count.filter(
          (cnt, idx) => idx !== parseInt(event.currentTarget.parentElement.id),
        ),
      );
    }
  };

  useEffect(() => {
    axios.get('http://localhost:8000/api/ingredients').then((res) => {
      console.log(res);
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
                value={select}
                onBlur={() => {
                  getRecipe({ [kind]: select });
                }}
                onChange={handleChange}
              >
                <MenuItem disabled value="">
                  <em>none</em>
                </MenuItem>
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
              sx={{ marginRight: '10px;' }}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={() => {
                getRecipe({ ['제품명']: title });
              }}
            />
            <TextField
              label="용량"
              variant="standard"
              type="number"
              onChange={(e) => setValue(e.target.value)}
              onBlur={() => {
                getRecipe({ ['용량']: value });
              }}
            />
            <ClearIcon id={idx.toString()} onClick={handleDelete} />
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
