import React from 'react';
import styled from 'styled-components';

export const ApplyButton = ({ handleApply, name }: any) => {
  return (
    <Apply onClick={handleApply}>
      {name === 'apply' ? '등록하기' : '수정하기'}
    </Apply>
  );
};

const Apply = styled.div`
  background-color: #4c6ef5;
  color: #edf2ff;
  border-radius: 10px;
  width: 150px;
  text-align: center;
  font-size: 24px;
  margin-top: 20px;
  padding: 10px;

  &:hover {
    background-color: #edf2ff;
    color: #4c6ef5;
    cursor: pointer;
  }
`;
