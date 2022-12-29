import React, { ReactHTMLElement, useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import styled from 'styled-components';
import { FormControl, InputLabel, TextField, MenuItem } from '@mui/material';
import Select from '@mui/material/Select';
import axios from 'axios';
import { GET_INDEGRIENT } from '../../../constants/api';

interface Props {
  kind: string;
  setSelect: any;
  setTitle: any;
  setValue: any;
  select: any;
  title: any;
  value: number[];
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
  console.log();
  const [count, setCount] = useState<number[]>([0]);
  const [ingredient, setIngredient] = useState<string[]>();
  const [alcohol, setAlcohol] = useState<string[]>();

  const handleAddRecipe = () => {
    setCount((prev) => [...prev, 0]);
  };
  const handleSelectChange = (event: any, index: number) => {
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
      parseInt(event.target.value),
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
          (item: any, idx: number) =>
            idx !== parseInt(event.currentTarget.parentElement.id),
        ),
      );

      setTitle(
        title.filter(
          (item: any, idx: number) =>
            idx !== parseInt(event.currentTarget.parentElement.id),
        ),
      );

      setValue(
        value.filter(
          (item: any, idx: number) =>
            idx !== parseInt(event.currentTarget.parentElement.id),
        ),
      );
    }
  };

  useEffect(() => {
    axios.get(GET_INDEGRIENT).then((res) => {
      setIngredient(res.data.getIngredient.ingredient);
      setAlcohol(res.data.getIngredient.alcohol);
    });
  }, []);

  return (
    <>
      <RecipeAddWrapper>
        <RecipeHeader>
          {kind === 'alcohol' ? '알코올' : '추가재료'}
        </RecipeHeader>
        {count.length > 3 ? (
          <AddIcon
            fontSize="large"
            sx={{
              marginRight: '40px',
              color: '#f03e3e',
              cursor: 'not-allowed',
            }}
          />
        ) : (
          <AddIcon
            onClick={handleAddRecipe}
            fontSize="large"
            sx={{ marginRight: '40px' }}
          />
        )}
      </RecipeAddWrapper>

      {count.map((item, idx) => (
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
            inputProps={{ maxLength: 15 }}
            sx={{ marginRight: '10px;' }}
            onChange={(e) => handleTitleChange(e, idx)}
          />
          <TextField
            label="용량"
            variant="standard"
            type="number"
            inputProps={{ maxLength: 999 }}
            value={value[idx]}
            onChange={(e) => handleValueChange(e, idx)}
          />
          {count.length === 1 ? (
            kind === 'alcohol' ? (
              <ClearIcon
                id={idx.toString()}
                sx={{
                  color: '#f03e3e',
                  cursor: 'not-allowed',
                }}
              />
            ) : (
              <ClearIcon id={idx.toString()} onClick={handleDelete} />
            )
          ) : (
            ''
          )}
        </RecipeContainer>
      ))}
      {count.length > 3 || count.length === 1 ? (
        <AlertError>재료는 최대 4개 이하으로 넣어주세요</AlertError>
      ) : (
        ''
      )}
    </>
  );
};

const RecipeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const RecipeHeader = styled.div`
  font-size: 20px;
  color: #495057;
  font-weight: 700;
  margin-left: 40px;
`;

const RecipeAddWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AlertError = styled.div`
  font-size: 12px;
  color: #f03e3e;
  align-items: center;
  text-align: center;
`;
