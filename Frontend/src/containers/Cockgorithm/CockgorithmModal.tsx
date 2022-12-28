import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CloseButton from '@mui/icons-material/Close';

import { CockgorithmGameContent } from './../../components/Cockgorithm/CockgorithmGameContent';
import { CockgorithmGameResult } from '../../components/Cockgorithm/CockgorithmGameResult';
import { CockgorithmGameLoading } from './../../components/Cockgorithm/CockgorithmGameLoading';
import { IGame } from '../../pages/Cockgorithm/CockgorithmPage';
import { useToggle } from './../../utils/customHooks';
import {
  CockgorithmReqData,
  CockgorithmCocktail,
  CockgorithmResData,
} from '../../../../types/cockgorithmType';
import { GET_COCKGORITHM_COCKTAIL } from '../../constants/api';

interface CockgorithmModalProps {
  handleModalClose: () => void;
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
  handleModalClose,
  seletedGame,
}: CockgorithmModalProps) => {
  const { isOpen: isLoadingOpen, handleOpen: handleLoadingOpen } =
    useToggle(false);

  const { isOpen: isGameResultOpen, handleOpen: handleGameResultOpen } =
    useToggle(false);

  const [isFoundCocktail, setIsFoundCocktail] = useState<boolean>(false);

  const [filters, setFilters] = useState<CockgorithmReqData>({
    category: '',
    alcohol: '',
    degree: '',
    ingredients: [],
  });

  const [cocktailInfo, setCocktailInfo] =
    useState<CockgorithmCocktail>(cocktailMockData); // 서버로부터 받아온 cocktail이 저장되는 state

  useEffect(() => {
    if (isLoadingOpen) {
      console.log('유저 응답', filters);

      setTimeout(async () => {
        try {
          const response: CockgorithmResData = (
            await axios.post(GET_COCKGORITHM_COCKTAIL, filters)
          ).data;

          console.log('response');
          console.log(response);

          if (response.isFound) {
            const fetchedCocktail = response.data as CockgorithmCocktail;
            setIsFoundCocktail(true);
            setCocktailInfo(fetchedCocktail);
          } else {
            setIsFoundCocktail(false);
          }
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
      <Dimmed onClick={handleModalClose} />
      <Modal>
        <MainSection>
          <GameTitle>
            <span>
              {seletedGame.gameEmoji}
              {seletedGame.message}
            </span>
          </GameTitle>
          {!isLoadingOpen ? (
            <CockgorithmGameContent
              selectedGame={seletedGame}
              handleLoadingOpen={handleLoadingOpen}
              setFilters={setFilters}
            />
          ) : !isGameResultOpen ? (
            <CockgorithmGameLoading />
          ) : isFoundCocktail ? (
            <CockgorithmGameResult cocktailInfo={cocktailInfo} />
          ) : (
            <CockgorithmGameResult />
          )}
        </MainSection>
        <CustomCloseButton onClick={handleModalClose} />
      </Modal>
    </>
  );
};

const Dimmed = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
`;

const Modal = styled.div`
  width: 80%;
  max-width: 600px;
  height: 60%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  padding: 30px;
  margin: auto;
  z-index: 12;

  background-color: ${(props) => props.theme.colors.indigo7};
  border: 10px solid ${(props) => props.theme.colors.indigo9};
  border-radius: 50px;
`;

const MainSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const GameTitle = styled.div`
  width: 80%;
  height: 15%;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  padding: 0px 20px;
  color: white;
  line-height: 1.5;

  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

const CustomCloseButton = styled(CloseButton)`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;

  color: white;

  @media screen and (max-width: 500px) {
    width: 25px;
    height: 25px;
  }
`;
