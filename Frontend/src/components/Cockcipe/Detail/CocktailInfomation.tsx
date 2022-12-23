import React from 'react';
import styled from 'styled-components';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { ICocktail } from '../../../containers/Cockcipe/Detail/DetailContainer';

// 칵테일 이미지, 명, 도수, 맛 이런거 표시해주기
type CockProps = {
  cocktail: ICocktail;
};
export const CocktailInfomation = ({ cocktail }: CockProps) => {
  return (
    <>
      <img src={cocktail.img} width="300" height="300" />
      <Name>{cocktail.name}</Name>
      <Degree>{cocktail.degree}</Degree>
      {cocktail.flavor.map((item: string, idx) => (
        <FlavorTag key={idx}>{item}</FlavorTag>
      ))}
      <Content>{cocktail.content}</Content>
      <>
        <LikeNumber>{cocktail.likes}</LikeNumber>
        <ThumbUpIcon />
      </>
    </>
  );
};

const Name = styled.div`
  font-size: 24px;
`;
const Degree = styled.div`
  font-size: 20px;
`;
const FlavorTag = styled.div`
  background-color: #5c7cfa;
  color: #edf2ff;
`;
const LikeNumber = styled.div`
  font-size: 15px;
`;
const Content = styled.div`
  font-size: 15px;
  border: 1px solid black;
`;
