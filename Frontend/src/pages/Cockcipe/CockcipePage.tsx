import React from 'react';
import styled from 'styled-components';
import { CocktailApplyBtn } from '../../components/Cockcipe/List/CocktailApplyBtn';
import { ListHeader } from '../../components/Cockcipe/List/ListHeader';
import { ListContainer } from '../../containers/Cockcipe/List/ListContainer';

export const CockcipePage = () => {
  return (
    <>
      <ListHeader />
      <ListContainer />
      <ApplyWrapper>
        <CocktailApplyBtn />
      </ApplyWrapper>
    </>
  );
};
const ApplyWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
