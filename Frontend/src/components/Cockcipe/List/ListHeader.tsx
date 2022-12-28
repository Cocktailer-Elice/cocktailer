import React from 'react';
import styled from 'styled-components';

export const ListHeader = () => {
  return (
    <Header>
      칵시피 <SubHeader>칵테일 레시피의 천국</SubHeader>
    </Header>
  );
};

const Header = styled.div`
  color: #4263eb;
  text-shadow: 2px 2px 2px #91a7ff;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin: 30px 0;
`;

const SubHeader = styled.div`
  font-size: 20px;
  margin-top: 5px;
  color: #91a7ff;
  text-shadow: 1px 1px 1px #91a7ff;
`;
