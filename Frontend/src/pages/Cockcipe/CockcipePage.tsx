import React from 'react';
import styled from 'styled-components';
import { ApplyContainer } from '../../containers/Cockcipe/List/ApplyContainer';
import { ListContainer } from '../../containers/Cockcipe/List/ListContainer';
import { ListHeaderContainer } from '../../containers/Cockcipe/List/ListHeaderContainer';

export const CockcipePage = () => {
  return (
    <>
      <ListHeaderContainer />
      <ListContainer />
      <ApplyContainer />
    </>
  );
};
