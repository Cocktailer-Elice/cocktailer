import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { CockgorithmCocktail } from '../../../../types/cockgorithmType';

interface CockgorithmGameResultProps {
  cocktailInfo?: CockgorithmCocktail;
}

export const CockgorithmGameResult = ({
  cocktailInfo,
}: CockgorithmGameResultProps) => {
  return (
    <GameResult>
      {cocktailInfo && (
        <>
          <CocktailTitle>"{cocktailInfo.name}"를 추천드려요!</CocktailTitle>
          <CocktailImage src={cocktailInfo.img}></CocktailImage>
          <CocktailContent>{cocktailInfo.content}</CocktailContent>
          <CocktailDegree>도수 : {cocktailInfo.degree} 도</CocktailDegree>
          <Link to={`/cockcipe/detail/${cocktailInfo.id}`}>
            상세 정보 보러 가기
          </Link>
        </>
      )}
      {!cocktailInfo && (
        <CocktailNotFound>
          <span>원하시는 조건에 알맞는 칵테일을 찾지 못했어요. 😢</span>
          <span>더 다양한 칵테일 레시피를 제공해드릴 수 있도록</span>
          <span>칵테일러가 더욱 노력할께요! 💪</span>
        </CocktailNotFound>
      )}
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

const CocktailNotFound = styled.div`
  width: 100%;
  height: 40%;
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  font-size: 18px;

  @media screen and (max-width: 500px) {
    height: 80%;
    font-size: 16px;
  }
`;
