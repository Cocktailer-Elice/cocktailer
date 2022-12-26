import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
interface Props {
  id: string;
}
export const ModifyButton = ({ id }: Props) => {
  return <Modify to={`/cockcipe/modify/${id}`}>수정하기</Modify>;
};

const Modify = styled(Link)`
  margin: 15px;
  border: 1px solid black;
`;
