import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
interface Props {
  category: string;
}
export const MorePageBtn = ({ category }: Props) => {
  return <Link to={`/cockcipe/category/${category}`}>더보기</Link>;
};

const MoveLink = styled(Link)`
  font-size: 15px;
  color: #212529;

  &:hover {
    cursor: pointer;
  }
`;
