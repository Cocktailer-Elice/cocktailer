import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { CockgorithmCocktail } from '../../../../types/cockgorithmType';

interface CockgorithmGameResultProps {
  cocktailInfo: CockgorithmCocktail;
}

export const CockgorithmGameResult = ({
  cocktailInfo,
}: CockgorithmGameResultProps) => {
  return (
    <GameResult>
      <CocktailTitle>"{cocktailInfo.name}"를 추천드려요!</CocktailTitle>
      <CocktailImage src={cocktailInfo.img}></CocktailImage>
      <CocktailContent>{cocktailInfo.content}</CocktailContent>
      <CocktailDegree>도수 : {cocktailInfo.degree} 도</CocktailDegree>
      <Link to={`/cockcipe/detail/${cocktailInfo.id}`}>
        상세 정보 보러 가기
      </Link>
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

const CocktailImage = styled.img`
  display: block;
  width: 120px;
  height: 240px;
  background-color: blue;
`;

const CocktailDegree = styled.div`
  width: 100%;
  height: 100px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: red;
`;

const CocktailContent = styled.div`
  width: 100%;
  height: 400px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
`;
