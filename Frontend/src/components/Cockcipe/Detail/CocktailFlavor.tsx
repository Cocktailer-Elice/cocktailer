import React from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
}
const CocktailFlavor = ({ name }: Props) => {
  return <Tag>{name}</Tag>;
};

export default CocktailFlavor;
const Tag = styled.div`
  box-sizing: border-box;
  border: 2px solid #4c6ef5;
  width: 100px;
  text-align: center;
  padding: 10px;
`;
