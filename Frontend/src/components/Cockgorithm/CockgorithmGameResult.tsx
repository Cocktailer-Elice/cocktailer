import styled from 'styled-components';
import { string } from 'yup';

interface CockgorithmGameResultProps {
  cocktailInfo: string;
  // cocktail schema로 업데이트
}

export const CockgorithmGameResult = ({
  cocktailInfo,
}: CockgorithmGameResultProps) => {
  return <GameResult>"{cocktailInfo}"를 추천드려요!</GameResult>;
};

const GameResult = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
  background-color: tomato;
`;
