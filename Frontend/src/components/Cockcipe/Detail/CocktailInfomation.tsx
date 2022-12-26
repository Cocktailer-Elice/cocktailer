import React, { useState } from 'react';
import styled from 'styled-components';
import { ICocktail } from '../../../containers/Cockcipe/Detail/DetailContainer';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

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
  for (let key in cocktail.ratio.ingredient) {
    const value = cocktail.ratio.ingredient[key];
    for (let temp in value) {
      totalIngred.push(value[temp]);
    }
    totalCnt += value.length;
  }

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

  const [like, setLike] = useState<number>(cocktail.likes);
  const [isLike, setIsLike] = useState<boolean>(false);
  const handleLike = () => {
    setIsLike(!isLike);

    if (!isLike) {
      setLike(like + 1);
    } else {
      setLike(like - 1);
    }
  };
  return (
    <>
      <Name>{cocktail.name}</Name>
      <img src={cocktail.img} width="300" height="300" />

      <Degree>{cocktail.degree}</Degree>
      <FlavorContainer>
        {cocktail.flavor.map((item: string, idx) => (
          <FlavorTag key={idx}>{item}</FlavorTag>
        ))}
      </FlavorContainer>

      <Content>{cocktail.content}</Content>
      <ChartWrapper>
        <Pie data={data} />
      </ChartWrapper>

      <LikeContainer>
        <LikeNumber>{like}</LikeNumber>
        <Like onClick={handleLike}>{isLike ? 'isGood' : 'Good'}</Like>
      </LikeContainer>
    </>
  );
};

const Name = styled.div`
  font-size: 24px;
  margin: 15px 0;
`;

const Degree = styled.div`
  font-size: 20px;
`;
const FlavorContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const FlavorTag = styled.div`
  background-color: #5c7cfa;
  color: #edf2ff;
  font-size: 20px;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
`;
const LikeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const LikeNumber = styled.div`
  font-size: 15px;
  margin-right: 10px;
`;
const Like = styled.div`
  font-size: 30px;
  border: 1px solid black;

  &:hover {
    background-color: aliceblue;
  }
`;
const Content = styled.div`
  font-size: 20px;
`;
const ChartWrapper = styled.div`
  max-width: 400px;
  max-height: 400px;
`;
