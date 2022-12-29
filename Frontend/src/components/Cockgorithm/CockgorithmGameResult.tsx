import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { CockgorithmCocktail } from '../../../../types';

interface CockgorithmGameResult {
  isFoundCocktail: boolean;
  cocktailInfo: CockgorithmCocktail;
  resetCockgorithmState: () => void;
}

export const CockgorithmGameResult = ({
  isFoundCocktail,
  cocktailInfo,
  resetCockgorithmState,
}: CockgorithmGameResult) => {
  return (
    <GameResult>
      {isFoundCocktail && (
        <>
          <CocktailTitle>"{cocktailInfo.name}"를 추천드릴게요!</CocktailTitle>
          <CocktailImageWrapper>
            <CocktailImage src={cocktailInfo.img} />
          </CocktailImageWrapper>
          <CocktailInfo>
            <CocktailContent>{cocktailInfo.content}</CocktailContent>
            <CocktailDegree>도수 : {cocktailInfo.degree} 도</CocktailDegree>
          </CocktailInfo>
          <CustomLink
            to={`/cockcipe/detail/${cocktailInfo.id}`}
            onClick={() => resetCockgorithmState()}
          >
            상세 정보 보러 가기
          </CustomLink>
        </>
      )}
      {!isFoundCocktail && (
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
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CocktailTitle = styled.div`
  width: 100%;
  height: 10%;
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #69db7c;
  font-size: 24px;
  font-weight: bold;
  font-style: italic;

  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;

const CocktailImageWrapper = styled.div`
  width: 100%;
  height: 40%;
  margin: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CocktailImage = styled.img`
  width: 50%;
  min-width: 200px;
  height: 100%;
`;

const CocktailInfo = styled.div`
  width: 100%;
  height: 45%;
  border: 5px solid ${(props) => props.theme.colors.indigo9};
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.indigo5};
`;

const CocktailContent = styled.div`
  width: 100%;
  height: 70%;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 15px;
  color: white;
  font-size: 14px;
`;

const CocktailDegree = styled.div`
  width: 100%;
  height: 30%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
  color: #212529;
  font-size: 13px;
  font-weight: 600;
`;

const CustomLink = styled(Link)`
  width: 100%;
  height: 5%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  padding: 10px;
  color: ${(props) => props.theme.colors.indigo1};
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
  color: white;

  @media screen and (max-width: 500px) {
    height: 60%;
    font-size: 14px;
    padding: 10px;
  }
`;
