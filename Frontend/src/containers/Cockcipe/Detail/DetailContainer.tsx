import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CocktailInfomation } from '../../../components/Cockcipe/Detail/CocktailInfomation';
import { ShareBtn } from '../../../components/Cockcipe/Detail/ShareBtn';

interface Recipe {
  alcohol: any;
  ingredient: any;
}
export interface ICocktail {
  name: string;
  id: number;
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
    id: 0,
    img: '',
    flavor: [],
    degree: 0,
    likes: 0,
    content: '',
    ratio: { alcohol: {}, ingredient: {} },
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/cocktails/${cocktailId}`)
      .then((res) => {
        console.log(res);
        setCocktail(res.data.cocktail);
      });
  }, []);

  return (
    <>
      <ContentContainer>
        <CocktailInfomation cocktail={cocktailInfo} />
        <ShareBtn
          img={cocktailInfo.img}
          name={cocktailInfo.name}
          id={cocktailInfo.id}
          content={cocktailInfo.content}
        />
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
