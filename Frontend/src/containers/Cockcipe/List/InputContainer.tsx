import React from 'react';
import styled from 'styled-components';
import { SearchCocktailInput } from '../../../components/Cockcipe/List/SearchCocktailInput';

export const InputContainer = () => {
  return (
    <Container>
      <SearchCocktailInput />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;
