import React from 'react';
import styled from 'styled-components';

const ApplyBtn = styled.div`
  border: 1px solid black;
  width: 100px;
`;

const RecipeApplyBtn = () => {
  return <ApplyBtn>나만의 레시피 등록하기</ApplyBtn>;
};

export default RecipeApplyBtn;
