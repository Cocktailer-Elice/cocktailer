import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import { ICocktail } from '../DetailWrapper';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import axios from 'axios';
import { LIKE_COCKTAIL } from '../../../constants/api';

type CockProps = {
  cocktail: ICocktail;
  isliked: boolean;
  setLiked: any;
};
ChartJS.register(ArcElement, Tooltip, Legend);

export const CocktailInfomation = ({
  cocktail,
  isliked,
  setLiked,
}: CockProps) => {
  const url = window.location.pathname;
  const cocktailId = parseInt(url.split('/')[3]);
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

  const handleLike = () => {
    axios
      .get(LIKE_COCKTAIL(cocktailId))
      .then((res) => {
        setLiked(!isliked);
        setLike(res.data.likes);
      })
      .catch((err) => alert('로그인 해주세요!'));
  };
  useEffect(() => {
    setLike(cocktail.likes);
  }, [cocktail.likes]);
  return (
    <>
      <Img src={cocktail.img} width="300" height="300" />
      <TitleContainer>
        <Name>{cocktail.name}</Name>
        <Degree>&nbsp;&nbsp;({cocktail.degree}%)</Degree>
      </TitleContainer>
      <Nickname>
        작성자 : {cocktail.owner.nickname}
        {cocktail.owner.isBartender && <LocalBarIcon />}
      </Nickname>
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
          {isliked ? (
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
  font-size: 25px;
`;
const NickContainer = styled.div``;
const Nickname = styled.p`
  font-size: 15px;
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
  display: flex;
  justify-content: center;
  align-items: center;
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
