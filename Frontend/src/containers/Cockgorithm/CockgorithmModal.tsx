import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { CockgorithmGameContent } from './../../components/Cockgorithm/CockgorithmGameContent';
import { CockgorithmGameResult } from '../../components/Cockgorithm/CockgorithmGameResult';
import { CockgorithmGameLoading } from './../../components/Cockgorithm/CockgorithmGameLoading';
import { IGame } from '../../pages/Cockgorithm/CockgorithmPage';
import { useToggle } from './../../utils/customHooks';
import {
  CockgorithmReqData,
  CockgorithmResData,
} from '../../../../types/cockgorithmType';

interface CockgorithmModalProps {
  handleModalToggle: () => void;
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
  handleModalToggle,
  seletedGame,
}: CockgorithmModalProps) => {
  const { isOpen: isLoadingOpen, handleOpen: handleLoadingOpen } =
    useToggle(false);

  const { isOpen: isGameResultOpen, handleOpen: handleGameResultOpen } =
    useToggle(false);

  const [filters, setFilters] = useState<CockgorithmReqData>({
    category: '',
    alcohol: '',
    degree: '',
    ingredients: [],
  });

  const [cocktailInfo, setCocktailInfo] =
    useState<CockgorithmResData>(cocktailMockData); // 서버로부터 받아온 cocktail이 저장되는 state

  useEffect(() => {
    if (isLoadingOpen) {
      console.log('유저 응답', filters);

      setTimeout(async () => {
        try {
          const response = await axios.post(
            'http://localhost:8000/api/cocktails/cockgorithm',
            filters,
          );

          console.log('response');
          console.log(response);

          const fetchedCocktail = response.data.data;
          setCocktailInfo(fetchedCocktail);
        } catch (error) {
          alert(error);
        } finally {
          handleGameResultOpen();
        }
      }, 2000);
    }
  }, [isLoadingOpen]);

  return (
    <>
      <Dimmed onClick={handleModalToggle} />
      <Modal>
        <MainSection>
          <GameTitle>게임 타이틀 : {seletedGame.gameTitle}</GameTitle>
          {!isLoadingOpen ? (
            <CockgorithmGameContent
              selectedGame={seletedGame}
              handleLoadingOpen={handleLoadingOpen}
              setFilters={setFilters}
            />
          ) : !isGameResultOpen ? (
            <CockgorithmGameLoading />
          ) : (
            <CockgorithmGameResult cocktailInfo={cocktailInfo} />
          )}
        </MainSection>
        <CloseButton onClick={handleModalToggle} />
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
