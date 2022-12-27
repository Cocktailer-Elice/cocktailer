import axios from 'axios';
import React from 'react';

import styled from 'styled-components';
interface Props {
  id: string;
}
export const DeleteButton = ({ id }: Props) => {
  const handleDelete = () => {
    // axios
    //   .delete(`/api/cocktails/deletecocktails/${id}`)
    //   .then((res) => console.log(res));
    console.log('삭제요청');
  };
  return <Delete onClick={handleDelete}>삭제하기</Delete>;
};

const Delete = styled.div`
  margin: 15px;
  background-color: #3b5bdb;
  color: #dbe4ff;
  font-size: 20px;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    color: #3b5bdb;
    background-color: #dbe4ff;
  }
`;
