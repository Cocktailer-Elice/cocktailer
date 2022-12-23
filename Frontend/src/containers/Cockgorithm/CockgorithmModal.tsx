import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { CockgorithmGameContent } from './../../components/Cockgorithm/CockgorithmGameContent';
import { CockgorithmGameResult } from '../../components/Cockgorithm/CockgorithmGameResult';
import { CockgorithmGameLoading } from './../../components/Cockgorithm/CockgorithmGameLoading';
import { IGame } from '../../pages/Cockgorithm/CockgorithmPage';
import {
  CockgorithmReqData,
  CockgorithmResData,
} from '../../../../types/cockgorithmType';

interface CockgorithmModalProps {
  toggleModal: () => void;
  seletedGame: IGame;
}

const cocktailMockData = {
  id: 1,
  name: '마티니 블루',
  img: '칵테일 이미지 URL',
  degree: 1,
  content: '마티니 블루는 주절주절',
};

export const CockgorithmModal = ({
  toggleModal,
  seletedGame,
}: CockgorithmModalProps) => {
  const [isGameEnd, setIsGameEnd] = useState(false);
  const [filters, setFilters] = useState<CockgorithmReqData>({
    category: '',
    alcohol: '',
    degree: '',
    ingredients: [],
  });
  const [loading, setLoading] = useState(false);
  const [cocktailInfo, setCocktailInfo] =
    useState<CockgorithmResData>(cocktailMockData); // 서버로부터 받아온 cocktail이 저장되는 state

  const toggleGameEnd = () => {
    setIsGameEnd((curr) => !curr);
  };

  useEffect(() => {
    if (isGameEnd) {
      // 로딩 시작
      setLoading(true);

      console.log('유저 응답', filters);

      setTimeout(async () => {
        const response = await axios.post(
          'http://localhost:8000/api/cocktails/cockgorithm',
          filters,
        );

        console.log('response');
        console.log(response);

        console.log('response.data');
        console.log(response.data);

        const fetchedCocktail = response.data;

        setCocktailInfo(fetchedCocktail);

        setLoading(false);
      }, 2000);
    }
  }, [isGameEnd]);

  return (
    <>
      <Dimmed onClick={toggleModal} />
      <Modal>
        <MainSection>
          <GameTitle>게임 타이틀 : {seletedGame.gameTitle}</GameTitle>
          {!isGameEnd ? (
            <CockgorithmGameContent
              selectedGame={seletedGame}
              toggleGameEnd={toggleGameEnd}
              setFilters={setFilters}
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
  height: 450px;
  min-height: 450px;
  background-color: skyblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  overflow-y: scroll;
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
