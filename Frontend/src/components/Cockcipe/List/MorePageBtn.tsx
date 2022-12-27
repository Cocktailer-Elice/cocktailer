import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
interface Props {
  category: string;
}
export const MorePageBtn = ({ category }: Props) => {
  return <MoveLink to={`/cockcipe/category/${category}`}>더보기</MoveLink>;
};

const MoveLink = styled(Link)`
  font-size: 15px;
  color: #212529;
  text-decoration: none;
  font-weight: 550;
  &:hover {
    cursor: pointer;
    font-size: 17px;
  }
  margin-right: 20px;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
