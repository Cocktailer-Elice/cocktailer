import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CocktailChart } from '../../../components/Cockcipe/Detail/CocktailChart';
import { CocktailInfomation } from '../../../components/Cockcipe/Detail/CocktailInfomation';
import { LikeBtn } from '../../../components/Cockcipe/Detail/LikeBtn';
import { ShareBtn } from '../../../components/Cockcipe/Detail/ShareBtn';

interface Recipe {
  ingredient: string;
}
export interface ICocktail {
  name: string;
  id: string;
  img: string;
  flavor: string[];
  degree: number;
  likes: number;
  recipe: Recipe[];
}

export const DetailContainer = () => {
  const url = window.location.pathname;
  const cocktailId = url.split('/')[3];

  const [cocktailInfo, setCocktail] = useState<ICocktail>({
    name: '',
    id: '',
    img: '',
    flavor: [],
    degree: 0,
    likes: 0,
    recipe: [],
  });

  useEffect(() => {
    axios.get('/src/containers/Cockcipe/Detail/data.json').then((res) => {
      setCocktail(res.data.cocktail);
    });
  }, []);
  return (
    <>
      <ContentContainer>
        <CocktailInfomation cocktail={cocktailInfo} />
        <CocktailChart />
        <LikeBtn />
        <ShareBtn />
      </ContentContainer>
    </>
  );
};

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
