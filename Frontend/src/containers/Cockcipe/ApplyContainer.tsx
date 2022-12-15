import React from 'react';
import styled from 'styled-components';
import RecipeApplyBtn from '../../components/Cockcipe/List/RecipeApplyBtn';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ApplyContainer = () => {
  return (
    <Container>
      <RecipeApplyBtn />
    </Container>
  );
};

export default ApplyContainer;
