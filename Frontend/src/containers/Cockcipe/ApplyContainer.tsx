import React from 'react';
import styled from 'styled-components';
import CocktailApplyBtn from '../../components/Cockcipe/List/CocktailApplyBtn';

const ApplyContainer = () => {
  return (
    <Container>
      <CocktailApplyBtn />
    </Container>
  );
};

export default ApplyContainer;
const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;
