import React from 'react';
import { ICocktail } from '../../../containers/Cockcipe/Detail/DetailContainer';
// 칵테일 이미지, 명, 도수, 맛 이런거 표시해주기
type CockProps = {
  cocktail: ICocktail;
};
export const CocktailInfomation = ({ cocktail }: CockProps) => {
  return (
    <>
      {cocktail.img}
      {cocktail.name}
      {cocktail.degree}
      {cocktail.flavor}
    </>
  );
};
