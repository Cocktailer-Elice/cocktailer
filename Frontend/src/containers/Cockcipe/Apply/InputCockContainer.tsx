import React from 'react';
import styled from 'styled-components';

import { InputCockFlavor } from '../../../components/Cockcipe/Apply/InputCockFlavor';
import { InputCockInfo } from '../../../components/Cockcipe/Apply/InputCockInfo';

export const InputCockContainer = () => {
  return (
    <div>
      <CockInfoBox>
        <InputCockInfo name="칵테일명" />
        <br />
        <InputCockInfo name="칵테일 도수" />
      </CockInfoBox>
      <InputCockFlavor />
    </div>
  );
};

const CockInfoBox = styled.div``;
