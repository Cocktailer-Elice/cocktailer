import styled from 'styled-components';
import { string } from 'yup';

interface CockgorithmGameResultProps {
  cocktailInfo: string;
  // cocktail schema로 업데이트
}

export const CockgorithmGameResult = ({
  cocktailInfo,
}: CockgorithmGameResultProps) => {
  return <GameResult>받은 칵테일 정보 : {cocktailInfo}</GameResult>;
};

const GameResult = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: brown;
`;
