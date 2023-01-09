import styled from 'styled-components';
import { useEffect } from 'react';
import axios from 'axios';
import CloseButton from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

import { CockgorithmGameLoading } from './CockgorithmGameLoading';
import {
  CockgorithmCocktail,
  CockgorithmReqData,
  CockgorithmResData,
} from '../../../../types/cockgorithmType';
import { GET_COCKGORITHM_COCKTAIL } from '../../constants/api';
import { IGame } from '../../store/cockgorithmSlice';
import { CockgorithmGameContentContainer } from './../../containers/Cockgorithm/CockgorithmGameContentContainer';
import { CockgorithmGameResultContainer } from './../../containers/Cockgorithm/CockgorithmGameResultContainer';
import { Dimmed } from './../../common/Dimmed';
import { Toast } from '../../common/Toast';

interface CockgorithmModalProps {
  selectedGame: IGame;
  filters: CockgorithmReqData;
  isLoadingOpen: boolean;
  isGameResultOpen: boolean;
  setIsModalOpen: (boolean: boolean) => void;
  setIsFoundCocktail: (boolean: boolean) => void;
  setCocktailInfo: (cocktailInfo: CockgorithmCocktail) => void;
  setIsGameResultOpen: (boolean: boolean) => void;
}

export const CockgorithmModal = ({
  selectedGame,
  filters,
  isLoadingOpen,
  isGameResultOpen,
  setIsModalOpen,
  setIsFoundCocktail,
  setCocktailInfo,
  setIsGameResultOpen,
}: CockgorithmModalProps) => {
  useEffect(() => {
    if (isLoadingOpen) {
      setTimeout(async () => {
        try {
          const response: CockgorithmResData = (
            await axios.post(GET_COCKGORITHM_COCKTAIL, filters)
          ).data;

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
          setIsGameResultOpen(true);
          Toast({
            message: '칵고리즘을 완료하여 +10점을 획득하였습니다!',
            isSuccess: true,
            duration: 2000,
          });
        }
      }, 2000);
    }
  }, [isLoadingOpen]);

  return (
    <>
      <Dimmed handleDimmedClick={() => setIsModalOpen(false)} />
      <Modal
        layoutId={selectedGame.gameEmoji}
        gameColor={selectedGame.gameColor}
      >
        <MainSection>
          <GameTitle>
            <span>
              {selectedGame.gameEmoji}
              {selectedGame.message}
            </span>
          </GameTitle>
          {!isLoadingOpen ? (
            <CockgorithmGameContentContainer />
          ) : !isGameResultOpen ? (
            <CockgorithmGameLoading />
          ) : (
            <CockgorithmGameResultContainer />
          )}
        </MainSection>
        <CustomCloseButton onClick={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
};

const Modal = styled(motion.div)<{ gameColor: string }>`
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

  background-color: ${(props) =>
    props.gameColor ? props.gameColor : props.theme.colors.indigo7};
  border: 10px solid rgba(0, 0, 0, 0.1);
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
  cursor: pointer;

  :hover {
    scale: 1.2;
  }

  @media screen and (max-width: 500px) {
    width: 25px;
    height: 25px;
  }
`;
