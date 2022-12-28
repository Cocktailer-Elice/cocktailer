import styled from 'styled-components';
import { useEffect } from 'react';
import axios from 'axios';
import CloseButton from '@mui/icons-material/Close';

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
          setIsGameResultOpen(true);
        }
      }, 2000);
    }
  }, [isLoadingOpen]);

  return (
    <>
      <Dimmed onClick={() => setIsModalOpen(false)} />
      <Modal>
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
  cursor: pointer;

  @media screen and (max-width: 500px) {
    width: 25px;
    height: 25px;
  }
`;
