import axios from 'axios';
import { conforms } from 'lodash';
import React from 'react';
import { useNavigate } from 'react-router';

import styled from 'styled-components';
interface Props {
  id: number;
}
export const DeleteButton = ({ id }: Props) => {
  const navigate = useNavigate();
  const handleDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      axios
        .delete(`/api/cocktails/deletecocktail/${id}`)
        .then((res) => {
          navigate('/cockcipe');
        })
        .catch((err) => alert('삭제 에러가 발생!'));
    } else {
      alert('삭제 취소 합니다.');
    }
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
