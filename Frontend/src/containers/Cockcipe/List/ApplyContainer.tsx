import React from 'react';
import styled from 'styled-components';
import { CocktailApplyBtn } from '../../../components/Cockcipe/List/CocktailApplyBtn';

export const ApplyContainer = () => {
  return (
    <Container>
      <CocktailApplyBtn />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;
