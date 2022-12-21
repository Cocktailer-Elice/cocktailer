import React from 'react';
import styled from 'styled-components';
import { ApplyContainer } from '../../containers/Cockcipe/List/ApplyContainer';
import { InputContainer } from '../../containers/Cockcipe/List/InputContainer';
import { ListContainer } from '../../containers/Cockcipe/List/ListContainer';

export const CockcipePage = () => {
  return (
    <>
      <InputContainer />
      <ListContainer />
      <ApplyContainer />
    </>
  );
};
