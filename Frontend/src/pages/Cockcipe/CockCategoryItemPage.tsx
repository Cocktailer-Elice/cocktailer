import React from 'react';
import { Helmet } from 'react-helmet';
import { CategoryWrapper } from '../../components/Cockcipe/CategoryWrapper';

export const CockCategoryItemPage = () => {
  return (
    <>
      <Helmet>
        <title>Cocktailer | 칵테일 목록</title>
      </Helmet>
      <CategoryWrapper />
    </>
  );
};
