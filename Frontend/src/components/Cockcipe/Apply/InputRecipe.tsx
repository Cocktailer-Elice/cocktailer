import React from 'react';

const InputRecipe = () => {
  return (
    <>
      <label htmlFor="input_re">재료 이름</label>
      <input type="text" id="input_re" placeholder="이름입력" />
      <label htmlFor="input_ml">재료 용량</label>
      <input type="text" id="input_ml" placeholder="용량입력" />
    </>
  );
};

export default InputRecipe;
