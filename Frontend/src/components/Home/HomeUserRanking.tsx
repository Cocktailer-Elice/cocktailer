import styled from 'styled-components';
import { UserRanking } from '../../../../types';

interface HomeUserRankingProps {
  userRankingInfo: UserRanking;
}

export const HomeUserRanking = ({ userRankingInfo }: HomeUserRankingProps) => {
  return <Container>{userRankingInfo.nickname}</Container>;
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.indigo4};
`;
