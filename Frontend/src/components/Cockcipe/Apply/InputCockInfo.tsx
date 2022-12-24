import {
  FormControl,
  InputLabel,
  Select,
  TextField,
  MenuItem,
} from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  value: string;
  setName: any;
  setDegree: any;
  setCategory: any;
  category: string;
}

export const InputCockInfo = ({
  value,
  setName,
  setDegree,
  setCategory,
  category,
}: Props) => {
  return (
    <>
      <InfoContainer>
        <TextField
          label="나만의 칵테일 이름"
          sx={{ marginRight: '20px;' }}
          value={value}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          label="칵테일 도수"
          type="number"
          onChange={(e) => {
            setDegree(parseInt(e.target.value));
          }}
        />
      </InfoContainer>
      <CategoryContainer>
        <FormControl
          sx={{
            width: '200px',
          }}
        >
          <InputLabel>카테고리 선택</InputLabel>
          <Select
            label="카테고리"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value="dry">드라이 칵테일</MenuItem>
            <MenuItem value="refresh">리프레싱 칵테일</MenuItem>
            <MenuItem value="fruit">프루트 칵테일</MenuItem>
            <MenuItem value="sweet">스위트 칵테일</MenuItem>
            <MenuItem value="smoothie">스무디 칵테일</MenuItem>
            <MenuItem value="hot">핫 칵테일</MenuItem>
          </Select>
        </FormControl>
      </CategoryContainer>
    </>
  );
};

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const CategoryContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
`;
