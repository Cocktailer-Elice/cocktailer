import React from 'react';
import styled from 'styled-components';

export const ListHeader = () => {
  return <Header>칵테일 레시피</Header>;
};

const Header = styled.div`
  color: #4263eb;
  text-shadow: 2px 2px 2px #91a7ff;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin: 30px 0;
`;
