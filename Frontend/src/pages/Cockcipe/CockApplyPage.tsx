import React from 'react';
import ApplyBtn from '../../components/Cockcipe/Apply/ApplyBtn';

import InputCockContainer from '../../containers/Cockcipe/Apply/InputCockContainer';
import InputImgContainer from '../../containers/Cockcipe/Apply/InputImgContainer';
import InputRecipeContainer from '../../containers/Cockcipe/Apply/InputRecipeContainer';

const CockApplyPage = () => {
  return (
    <div>
      <InputImgContainer />
      <InputCockContainer />
      <InputRecipeContainer />
      <ApplyBtn />
    </div>
  );
};

export default CockApplyPage;
