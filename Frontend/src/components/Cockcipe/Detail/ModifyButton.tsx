import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
interface Props {
  id: number;
}
export const ModifyButton = ({ id }: Props) => {
  return <Modify to={`/cockcipe/modify/${id}`}>수정하기</Modify>;
};

const Modify = styled(Link)`
  margin: 15px;
  background-color: #3b5bdb;
  color: #dbe4ff;
  font-size: 20px;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    color: #3b5bdb;
    background-color: #dbe4ff;
    cursor: pointer;
  }
`;
