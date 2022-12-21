import React from 'react';
import styled from 'styled-components';
import { InputCockContent } from '../../../components/Cockcipe/Apply/InputCockContent';
import { InputCockFlavor } from '../../../components/Cockcipe/Apply/InputCockFlavor';
import { InputCockInfo } from '../../../components/Cockcipe/Apply/InputCockInfo';
import { InputRecipe } from '../../../components/Cockcipe/Apply/InputRecipe';
import { InputTitleImg } from '../../../components/Cockcipe/Apply/InputTitleImg';

export const ApplyContainer = () => {
  return (
    <>
      <Header>칵테일 레시피 등록하기</Header>
      <InputTitleImg />
      <InputCockInfo />
      <InputCockFlavor />
      <InputCockContent />
      <InputRecipe kind="alcohol" />
      <InputRecipe kind="drink" />
    </>
  );
};

const Header = styled.div`
  font-size: 24px;
  color: #3b5bdb;
  text-align: center;
  margin-top: 20px;
`;
