import React from 'react';
import { ApplyButton } from '../../components/Cockcipe/Apply/ApplyButton';

import { InputCockContainer } from '../../containers/Cockcipe/Apply/InputCockContainer';
import { InputImgContainer } from '../../containers/Cockcipe/Apply/InputImgContainer';
import { InputRecipeContainer } from '../../containers/Cockcipe/Apply/InputRecipeContainer';

export const CockApplyPage = () => {
  return (
    <div>
      <InputImgContainer />
      <InputCockContainer />
      <InputRecipeContainer />
      <ApplyButton />
    </div>
  );
};
