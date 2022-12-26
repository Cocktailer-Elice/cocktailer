import styled from 'styled-components';
import { CocktailRanking } from '../../../../types';

interface HomeCocktailRankingProps {
  cocktailRankingInfo: CocktailRanking;
}

export const HomeCocktailRanking = ({
  cocktailRankingInfo,
}: HomeCocktailRankingProps) => {
  return (
    <Container>
      <Image />
      <Title>
        <Name>{cocktailRankingInfo.name}</Name>
      </Title>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 60%;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 5px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: bold;
`;
