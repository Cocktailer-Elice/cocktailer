import React from 'react';
import styled from 'styled-components';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { ICocktail } from '../../../containers/Cockcipe/Detail/DetailContainer';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// 칵테일 이미지, 명, 도수, 맛 이런거 표시해주기
type CockProps = {
  cocktail: ICocktail;
};
ChartJS.register(ArcElement, Tooltip, Legend);
export const CocktailInfomation = ({ cocktail }: CockProps) => {
  let totalCnt = 0;
  let totalIngred = [];
  for (let key in cocktail.ratio.alcohol) {
    const value = cocktail.ratio.alcohol[key];
    for (let temp in value) {
      totalIngred.push(value[temp]);
    }
    totalCnt += value.length;
  }
  for (let key in cocktail.ratio.drink) {
    const value = cocktail.ratio.drink[key];
    for (let temp in value) {
      totalIngred.push(value[temp]);
    }
    totalCnt += value.length;
  }
  const totalCapacity = totalIngred
    .flatMap((item) => Object.values(item))
    .reduce((acc, cur: any) => acc + cur, 0);

  console.log(totalCnt, totalIngred, totalCapacity);
  let data = {
    labels: totalIngred.map((item) => Object.keys(item)),
    datasets: [
      {
        label: '# of Votes',
        data: totalIngred.flatMap((item) => Object.values(item)),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
      },
    ],
  };
  return (
    <>
      <img src={cocktail.img} width="300" height="300" />
      <Name>{cocktail.name}</Name>
      <Degree>{cocktail.degree}</Degree>
      {cocktail.flavor.map((item: string, idx) => (
        <FlavorTag key={idx}>{item}</FlavorTag>
      ))}
      <Content>{cocktail.content}</Content>
      <Pie data={data} />
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
