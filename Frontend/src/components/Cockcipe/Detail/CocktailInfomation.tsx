import React, { useState } from 'react';
import styled from 'styled-components';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
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
        label: '용량',
        data: totalIngred.flatMap((item) => Object.values(item)),
        backgroundColor: [
          '#ffd8a8',
          '#96f2d7',
          '#d8f5a2',
          '#99e9f2',
          '#bac8ff',
          '#eebefa',
          '#ffa8a8',
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
      <Img src={cocktail.img} width="300" height="300" />
      <TitleContainer>
        <Name>{cocktail.name}</Name>
        <Degree>&nbsp;&nbsp;({cocktail.degree}%)</Degree>
      </TitleContainer>

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
        <Like onClick={handleLike}>
          {isLike ? (
            <ThumbUpIcon fontSize="large" />
          ) : (
            <ThumbUpOffAltIcon fontSize="large" />
          )}
        </Like>
      </LikeContainer>
    </>
  );
};

const TitleContainer = styled.div`
  margin: 15px 0;
  display: flex;
`;
const Name = styled.p`
  font-size: 20px;
`;

const Degree = styled.p`
  font-size: 15px;
`;
const Img = styled.img`
  margin-top: 20px;
  width: 300px;
  height: 300px;
`;
const FlavorContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;
const FlavorTag = styled.div`
  background-color: #5c7cfa;
  color: #edf2ff;
  font-size: 20px;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
`;
const Content = styled.div`
  font-size: 20px;
  background-color: #edf2ff;
  border-radius: 10px;
  height: 300px;
`;
const LikeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const LikeNumber = styled.div`
  font-size: 30px;
  margin-right: 10px;
`;
const Like = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const ChartWrapper = styled.div`
  max-width: 400px;
  max-height: 400px;
  margin: 20px 0;
`;
