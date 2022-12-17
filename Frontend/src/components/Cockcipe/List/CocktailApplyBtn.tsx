import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CocktailApplyBtn = () => {
  return <ApplyBtn to="/cockcipe/apply">나만의 레시피 등록하기</ApplyBtn>;
};

export default CocktailApplyBtn;
const ApplyBtn = styled(Link)`
  border: 1px solid black;
  width: 100px;
  text-decoration: none;
`;
