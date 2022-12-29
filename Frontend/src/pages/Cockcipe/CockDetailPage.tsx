import React from 'react';
import { Helmet } from 'react-helmet';
import { DetailWrapper } from '../../components/Cockcipe/DetailWrapper';

export const CockDetailPage = () => {
  return (
    <>
      <Helmet>
        <title>Cocktailer | 칵테일</title>
      </Helmet>
      <DetailWrapper />
    </>
  );
};
