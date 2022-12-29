import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { CocktailApplyBtn } from '../../components/Cockcipe/List/CocktailApplyBtn';
import { ListHeader } from '../../components/Cockcipe/List/ListHeader';
import { ListWrapper } from '../../components/Cockcipe/ListWrapper';
import { useAuthentication } from '../../hooks/useAuthentication';

export const CockcipePage = () => {
  const isLoggedIn = useAuthentication();

  return (
    <>
      <Helmet>
        <title>cocktailer | 칵시피</title>
      </Helmet>
      <ListHeader />
      {isLoggedIn && (
        <ApplyWrapper>
          <CocktailApplyBtn />
        </ApplyWrapper>
      )}
      <ListWrapper />
    </>
  );
};
const ApplyWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
