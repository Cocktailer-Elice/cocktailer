import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GET_DETAIL_COCKTAIL } from '../../constants/api';
import { CocktailInfomation } from './Detail/CocktailInfomation';
import { DeleteButton } from './Detail/DeleteButton';
import { ModifyButton } from './Detail/ModifyButton';
import { ShareBtn } from './Detail/ShareBtn';

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

export const DetailWrapper = () => {
  const url = window.location.pathname;
  const cocktailId = parseInt(url.split('/')[3]);

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
  const [liked, setLiked] = useState<boolean>(false);

  useEffect(() => {
    axios.get(GET_DETAIL_COCKTAIL(cocktailId)).then((res) => {
      console.log(res);
      setCocktail(res.data.cocktail);
      setLiked(res.data.liked);
    });
  }, []);

  return (
    <>
      <ContentWrapper>
        <CocktailInfomation
          cocktail={cocktailInfo}
          isliked={liked}
          setLiked={setLiked}
        />
        <ShareBtn
          img={cocktailInfo.img}
          name={cocktailInfo.name}
          id={cocktailId}
          content={cocktailInfo.content}
        />
        <ButtonWrapper>
          <ModifyButton id={cocktailId} />
          <DeleteButton id={cocktailId} />
        </ButtonWrapper>
      </ContentWrapper>
    </>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;
