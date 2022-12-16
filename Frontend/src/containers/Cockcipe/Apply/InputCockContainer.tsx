import React from 'react';
import InputCockDegree from '../../../components/Cockcipe/Apply/InputCockDegree';
import InputCockFlavor from '../../../components/Cockcipe/Apply/InputCockFlavor';
import InputCockName from '../../../components/Cockcipe/Apply/InputCockName';

const InputCockContainer = () => {
  return (
    <div>
      <InputCockName />
      <InputCockFlavor />
      <InputCockDegree />
    </div>
  );
};

export default InputCockContainer;
