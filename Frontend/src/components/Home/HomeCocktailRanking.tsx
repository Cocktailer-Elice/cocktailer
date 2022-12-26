import { CocktailRanking } from './../../pages/Home/Home';
import styled from 'styled-components';

interface HomeCocktailRankingProps {
  cocktailRankingInfo: CocktailRanking;
}

export const HomeCocktailRanking = ({
  cocktailRankingInfo,
}: HomeCocktailRankingProps) => {
  return <Container>{cocktailRankingInfo.name}</Container>;
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.indigo4};
`;
