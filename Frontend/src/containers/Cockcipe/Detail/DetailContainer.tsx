import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CocktailInfomation } from '../../../components/Cockcipe/Detail/CocktailInfomation';
import { ShareBtn } from '../../../components/Cockcipe/Detail/ShareBtn';

interface Recipe {
  alcohol: any;
  drink: any;
}
export interface ICocktail {
  name: string;
  id: string;
  img: string;
  flavor: string[];
  degree: number;
  likes: number;
  content: string;
  ratio: Recipe;
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
    content: '',
    ratio: { alcohol: {}, drink: {} },
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/cocktails/${cocktailId}`)
      .then((res) => {
        console.log(res);
        setCocktail(res.data.cocktail[0]);
      });
  }, []);
  return (
    <>
      <ContentContainer>
        <CocktailInfomation cocktail={cocktailInfo} />
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
