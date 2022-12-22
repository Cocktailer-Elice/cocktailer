import React from 'react';
import styled from 'styled-components';

export const ApplyButton = ({ handleApply }: any) => {
  return <Apply onClick={handleApply}>등록하기</Apply>;
};

const Apply = styled.div`
  background-color: #4c6ef5;
  color: #edf2ff;
  border-radius: 10px;
  width: 100px;
  magin-top: 20px;
`;
