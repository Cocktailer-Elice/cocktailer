import React from 'react';
import styled from 'styled-components';
import SearchCocktailInput from '../../../components/Cockcipe/List/SearchCocktailInput';

const InputContainer = () => {
  return (
    <Container>
      <SearchCocktailInput />
    </Container>
  );
};

export default InputContainer;
const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;
