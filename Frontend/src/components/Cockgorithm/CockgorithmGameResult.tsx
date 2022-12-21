import styled from 'styled-components';

interface CockgorithmGameResultProps {
  cocktailInfo: string;
  // cocktail schema로 업데이트
}

export const CockgorithmGameResult = ({
  cocktailInfo,
}: CockgorithmGameResultProps) => {
  return (
    <GameResult>
      <CocktailTitle>"{cocktailInfo}"를 추천드려요!</CocktailTitle>
      <CocktailDetailInfo>{cocktailInfo} 상세정보</CocktailDetailInfo>
    </GameResult>
  );
};

const GameResult = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
  background-color: tomato;
`;

const CocktailTitle = styled.div`
  width: 100%;
  height: 100px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: brown;
`;

const CocktailDetailInfo = styled.div`
  width: 100%;
  height: 400px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: red;
`;
