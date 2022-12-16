import React from 'react';
import styled from 'styled-components';

const CocktailApplyBtn = () => {
  const handleMoveApply = (event: React.MouseEvent<HTMLDivElement>) => {
    window.location.href = '/cockcipe/apply';
  };
  return <ApplyBtn onClick={handleMoveApply}>나만의 레시피 등록하기</ApplyBtn>;
};

export default CocktailApplyBtn;
const ApplyBtn = styled.div`
  border: 1px solid black;
  width: 100px;
`;
