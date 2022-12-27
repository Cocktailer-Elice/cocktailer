import React from 'react';
import { Helmet } from 'react-helmet';

import { ApplyWrapper } from '../../components/Cockcipe/ApplyWrapper';

export const CockApplyPage = () => {
  return (
    <>
      <Helmet>
        <title>Cocktailer | 칵테일 등록</title>
      </Helmet>
      <ApplyWrapper />
    </>
  );
};
