import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import RefreshIcon from '@mui/icons-material/Refresh';

import { HomeMainCarousel } from '../../components/Home/HomeMainCarousel';
import { CocktailRanking, UserRanking } from '../../../../types';
import { GET_RANKINGS_OF_COCKTAIL_AND_USER } from '../../constants/api';
import { HomeWidgetsSection } from './../../components/Home/HomeWidgetsSection';
import { HomeCocktailRankingSection } from './../../components/Home/HomeCocktailRankingSection';
import { HomeUserRankingSection } from './../../components/Home/HomeUserRankingSection';
import { Rankings } from './../../../../types/cocktailsType';
import { transDate } from '../../utils/timeFormat';
import { Toast } from '../../common/Toast';

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
  const { data: rankings, refetch } = useQuery(['rankings'], getRankings, {
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true,
    retry: false,
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 5,
  });

  const lastUpdatedTime = useMemo(
    () => transDate(rankings?.lastUpdated as string),
    [rankings],
  );

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
          <SectionHeader>
            <RankingTitle>칵테일 레시피 랭킹 TOP 10</RankingTitle>
            <LastUpdatedContainer>
              <LastUpdated>
                {rankings ? `마지막 업데이트 : ${lastUpdatedTime}` : ''}
              </LastUpdated>
              <CustomRefreshIcon
                onClick={() => {
                  refetch();
                  Toast({
                    message: '랭킹 업데이트 완료',
                    isSuccess: true,
                  });
                }}
              />
            </LastUpdatedContainer>
          </SectionHeader>
          <HomeCocktailRankingSection
            cocktailRankingList={
              rankings ? rankings.cocktailRankings : cocktailRankingList_mock
            }
          />
        </BigSection>
        <BigSection>
          <SectionHeader>
            <RankingTitle>유저 랭킹 TOP 10</RankingTitle>
            <LastUpdatedContainer>
              <LastUpdated>
                {rankings ? `마지막 업데이트 : ${lastUpdatedTime}` : ''}
              </LastUpdated>
              <CustomRefreshIcon
                onClick={() => {
                  refetch();
                  Toast({
                    message: '랭킹 업데이트 완료',
                    isSuccess: true,
                  });
                }}
              />
            </LastUpdatedContainer>
          </SectionHeader>

          <HomeUserRankingSection
            userRankingList={
              rankings ? rankings.userRankings : userRankingList_mock
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

  @media screen and (max-width: 400px) {
    height: 45%;
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

  @media screen and (max-width: 450px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const RankingTitle = styled.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 600;
  margin-right: 15px;

  @media screen and (max-width: 450px) {
    font-size: 14px;
    margin-bottom: 3px;
  }
`;

const LastUpdatedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LastUpdated = styled.div`
  font-size: 11px;
  color: rgba(0, 0, 0, 0.3);
  letter-spacing: -0.5px;

  @media screen and (max-width: 450px) {
    font-size: 10px;
  }
`;

const CustomRefreshIcon = styled(RefreshIcon)`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.3);
  margin-left: 5px;
  cursor: pointer;

  @media screen and (max-width: 450px) {
    font-size: 12px;
  }
`;
