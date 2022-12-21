import {
  FormControl,
  InputLabel,
  Select,
  TextField,
  MenuItem,
} from '@mui/material';
import React from 'react';
import styled from 'styled-components';

export const InputCockInfo = () => {
  return (
    <>
      <InfoContainer>
        <TextField label="나만의 칵테일 이름" sx={{ marginRight: '20px;' }} />
        <TextField label="칵테일 도수" type="number" />
      </InfoContainer>
      <CategoryContainer>
        <FormControl
          sx={{
            width: '200px',
          }}
        >
          <InputLabel>카테고리 선택</InputLabel>
          <Select label="카테고리">
            <MenuItem>드라이 칵테일</MenuItem>
            <MenuItem>리프레싱 칵테일</MenuItem>
            <MenuItem>프루트 칵테일</MenuItem>
            <MenuItem>스위트 칵테일</MenuItem>
            <MenuItem>스무디 칵테일</MenuItem>
            <MenuItem>핫 칵테일</MenuItem>
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
