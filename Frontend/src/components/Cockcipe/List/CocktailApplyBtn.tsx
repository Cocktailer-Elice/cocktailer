import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CocktailApplyBtn = () => {
  return (
    <Right>
      <ApplyBtn to="/cockcipe/apply">나만의 레시피 등록하기</ApplyBtn>
    </Right>
  );
};

const ApplyBtn = styled(Link)`
  display: inline-block;
  border: none;
  box-sizing: border-box;
  background-color: #4263eb;
  width: auto;
  text-decoration: none;
  color: #edf2ff;
  border-radius: 10px;
  padding: 8px;
  margin: 30px 10px;

  &:hover {
    background-color: #edf2ff;
    color: #4263eb;
  }
`;

const Right = styled.div`
  text-align: right;
`