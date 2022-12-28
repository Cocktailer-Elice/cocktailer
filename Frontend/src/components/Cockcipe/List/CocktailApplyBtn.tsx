import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CocktailApplyBtn = () => {
  return <ApplyBtn to="/cockcipe/apply">나만의 레시피 등록하기</ApplyBtn>;
};

const ApplyBtn = styled(Link)`
  border: none;
  box-sizing: border-box;
  background-color: #4263eb;
  width: auto;
  text-decoration: none;
  color: #edf2ff;
  border-radius: 10px;
  padding: 8px;
  margin: 0 30px 30px 0;

  &:hover {
    background-color: #edf2ff;
    color: #4263eb;
  }
`;
