import React from 'react';
import CocktailFlavor from '../../components/Cockcipe/Detail/CocktailFlavor';
import CocktailName from '../../components/Cockcipe/Detail/CocktailName';
import CocktailTitleImg from '../../components/Cockcipe/Detail/CocktailTitleImg';
import LikeBtn from '../../components/Cockcipe/Detail/LikeBtn';
import RecipeChart from '../../components/Cockcipe/Detail/RecipeChart';
import ShareBtn from '../../components/Cockcipe/Detail/ShareBtn';

const DetailContainer = () => {
  return (
    <div>
      <CocktailTitleImg />
      <CocktailName />
      <CocktailFlavor />
      <RecipeChart />
      <LikeBtn />
      <ShareBtn />
    </div>
  );
};

export default DetailContainer;
