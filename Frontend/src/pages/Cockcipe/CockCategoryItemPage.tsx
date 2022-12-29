import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { CategoryWrapper } from '../../components/Cockcipe/CategoryWrapper';
import { CocktailApplyBtn } from '../../components/Cockcipe/List/CocktailApplyBtn';
import { useAuthentication } from '../../hooks/useAuthentication';

export const CockCategoryItemPage = () => {
  const isLoggedIn = useAuthentication();
  return (
    <>
      <Helmet>
        <title>Cocktailer | 칵테일 목록</title>
      </Helmet>
      <CategoryWrapper />
      {isLoggedIn && (
        <ApplyWrapper>
          <CocktailApplyBtn />
        </ApplyWrapper>
      )}
    </>
  );
};
const ApplyWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
