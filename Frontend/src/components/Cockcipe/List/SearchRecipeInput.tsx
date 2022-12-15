import React from 'react';
import styled from 'styled-components';

const Input = styled.input``;

const SearchRecipeInput = () => {
  return (
    <div>
      <input placeholder="레시피를 검색해보세요" type="text" />
    </div>
  );
};

export default SearchRecipeInput;
