import React from 'react';
import { ICocktail } from '../../../containers/Cockcipe/Detail/DetailContainer';

type CockProps = {
  cocktail: ICocktail;
};
const CocktailName = ({ cocktail }: CockProps) => {
  return <>{cocktail.name}</>;
};

export default CocktailName;
