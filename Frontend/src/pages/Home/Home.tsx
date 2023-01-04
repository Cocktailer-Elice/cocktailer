import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { HomeMainCarousel } from '../../components/Home/HomeMainCarousel';
import { CocktailRanking, UserRanking } from '../../../../types';
import { GET_RANKINGS_OF_COCKTAIL_AND_USER } from '../../constants/api';
import { HomeWidgetsSection } from './../../components/Home/HomeWidgetsSection';
import { HomeCocktailRankingSection } from './../../components/Home/HomeCocktailRankingSection';
import { HomeUserRankingSection } from './../../components/Home/HomeUserRankingSection';
import { Rankings } from './../../../../types/cocktailsType';

const cocktailRankingList_mock: CocktailRanking[] = [
  {
    id: 1,
    img: 'img',
    name: '1위 칵테일 이름',
    official: false,
    likes: 10,
    owner: {
      nickname: '1위 유저 닉네임',
      isBartender: true,
    },
  },
];

const userRankingList_mock: UserRanking[] = [
  {
    id: 1,
    avatarUrl: '1번 avartar url',
    nickname: '1번 닉네임',
    points: 10,
    isBartender: true,
  },
];

const getRankings = (): Promise<Rankings> => {
  return axios.get(GET_RANKINGS_OF_COCKTAIL_AND_USER).then((res) => res.data);
};

export const Home = () => {
  // const [cocktailRankingList, setCocktailRankingList] = useState<
  //   CocktailRanking[]
  // >(cocktailRankingList_mock);

  // const [userRankingList, setUserRankingList] =
  //   useState<UserRanking[]>(userRankingList_mock);

  // useEffect(() => {
  //   axios.get(GET_RANKINGS_OF_COCKTAIL_AND_USER).then((res) => {
  //     setCocktailRankingList(res.data.cocktailRanking);
  //     setUserRankingList(res.data.userRanking);
  //   });
  // }, []);

  const { data: rankings } = useQuery(['rankings'], getRankings, {
    staleTime: 1000 * 10,
    refetchInterval: 1000 * 10,
  });

  return (
    <>
      <Helmet>
        <title>Cocktailer | 홈</title>
      </Helmet>
      <Container>
        <Section>
          <HomeMainCarousel />
        </Section>
        <SmallSection>
          <HomeWidgetsSection />
        </SmallSection>
        <BigSection>
          <SectionHeader>칵테일 레시피 랭킹 TOP 10</SectionHeader>
          <HomeCocktailRankingSection
            cocktailRankingList={
              rankings ? rankings.cocktailRankings : cocktailRankingList_mock
              // cocktailRankingList_mock
            }
          />
        </BigSection>
        <BigSection>
          <SectionHeader>유저 랭킹 TOP 10</SectionHeader>
          <HomeUserRankingSection
            userRankingList={
              rankings ? rankings.userRankings : userRankingList_mock
              // userRankingList_mock
            }
          />
        </BigSection>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  box-sizing: border-box;
  background-color: #f2f2f2;
`;

const Section = styled.div`
  width: 100%;
  height: 30%;
  margin-bottom: 10px;
  background-color: white;
`;

const SmallSection = styled.div`
  width: 100%;
  height: 15%;
  background-color: white;
`;

const BigSection = styled.div`
  width: 100%;
  height: 35%;
  background-color: white;
  padding: 20px 10px;
  margin-top: 10px;

  @media screen and (max-width: 500px) {
    height: 30%;
  }
`;

const SectionHeader = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 5px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 600;
`;
