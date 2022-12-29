import React from 'react';
import { Helmet } from 'react-helmet';

import { ModifyWrapper } from '../../components/Cockcipe/ModifyWrapper';

export const CockModifyPage = () => {
  return (
    <>
      <Helmet>
        <title>Cocktailer | 칵테일 수정</title>
      </Helmet>
      <ModifyWrapper />
    </>
  );
};
