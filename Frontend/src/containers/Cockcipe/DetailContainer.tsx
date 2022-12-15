import React from 'react';
import styled from 'styled-components';
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
      <ContentContainer>
        <CocktailName />
        <CocktailFlavor />
        <RecipeChart />
        <LikeBtn />
        <ShareBtn />
      </ContentContainer>
    </div>
  );
};

export default DetailContainer;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
