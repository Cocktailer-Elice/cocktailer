import styled from 'styled-components';
import { useState, useEffect } from 'react';

import { CockgorithmGameContent } from './../../components/Cockgorithm/CockgorithmGameContent';
import { CockgorithmGameResult } from '../../components/Cockgorithm/CockgorithmGameResult';
import { CockgorithmGameLoading } from './../../components/Cockgorithm/CockgorithmGameLoading';
import { IGame } from '../../pages/Cockgorithm/CockgorithmPage';

interface CockgorithmModalProps {
  toggleModal: () => void;
  seletedGame: IGame;
}

interface IFilter {
  category: string;
  baseAlcohol: string;
  drink: string;
  degree: string;
  ingredient: string;
}

export const CockgorithmModal = ({
  toggleModal,
  seletedGame,
}: CockgorithmModalProps) => {
  const [questionCounter, setQuestionCounter] = useState(0);
  const [filters, setFilters] = useState<IFilter>({
    category: '',
    baseAlcohol: '',
    drink: '',
    degree: '',
    ingredient: '',
  });
  const [loading, setLoading] = useState(false);
  const [cocktailInfo, setCocktailInfo] = useState(''); // 서버로부터 받아온 cocktail이 저장되는 state

  useEffect(() => {
    if (questionCounter === 5) {
      // 로딩 시작
      setLoading(true);

      // 유저가 선택한 응답들을 서버로 전달
      console.log('유저 응답', filters);

      // 서버로부터 받아온 cocktail을 받아옴
      const cocktail = '마티니 블루';

      // 받아온 cocktail을 state로 관리
      setCocktailInfo(cocktail);

      // 2초 후 로딩 종료
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [questionCounter]);

  const increaseQuestionCounter = () => {
    setQuestionCounter((curr) => curr + 1);
  };

  const addFilter = (filter: string) => {
    const [filterName, filterValue] = filter.split(':');
    setFilters((curr: IFilter) => {
      if (
        filterName === 'category' ||
        filterName === 'baseAlcohol' ||
        filterName === 'drink' ||
        filterName === 'ingredient' ||
        filterName === 'degree'
      ) {
        curr[filterName] = filterValue;
      }
      return curr;
    });
  };

  return (
    <>
      <Dimmed onClick={toggleModal} />
      <Modal>
        <MainSection>
          <GameTitle>게임 타이틀 : {seletedGame.gameTitle}</GameTitle>
          {questionCounter < 5 ? (
            <CockgorithmGameContent
              selectedGame={seletedGame}
              questionCounter={questionCounter}
              addFilter={addFilter}
              increaseQuestionCounter={increaseQuestionCounter}
            />
          ) : loading ? (
            <CockgorithmGameLoading />
          ) : (
            <CockgorithmGameResult cocktailInfo={cocktailInfo} />
          )}
        </MainSection>
        <CloseButton onClick={toggleModal} />
      </Modal>
    </>
  );
};

const Modal = styled.div`
  width: 450px;
  min-height: 60%;
  position: fixed;
  top: 20%;
  padding: 30px;
  z-index: 11;
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dimmed = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
`;

const MainSection = styled.div`
  width: 100%;
  min-height: 450px;
  background-color: skyblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const GameTitle = styled.div`
  background-color: blue;
  height: 20px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled.div`
  width: 30px;
  height: 30px;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 10px;
`;
