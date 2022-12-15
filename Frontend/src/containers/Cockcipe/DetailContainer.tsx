import React from 'react';
import CocktailFlavor from '../../components/Cockcipe/CocktailFlavor';
import CocktailName from '../../components/Cockcipe/CocktailName';
import CocktailTitleImg from '../../components/Cockcipe/CocktailTitleImg';
import LikeBtn from '../../components/Cockcipe/LikeBtn';
import RecipeChart from '../../components/Cockcipe/RecipeChart';
import ShareBtn from '../../components/Cockcipe/ShareBtn';

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
