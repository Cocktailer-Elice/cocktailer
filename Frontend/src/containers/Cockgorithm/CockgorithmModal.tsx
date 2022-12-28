import styled from 'styled-components';
import { useEffect } from 'react';
import axios from 'axios';
import CloseButton from '@mui/icons-material/Close';

import { CockgorithmGameContent } from './../../components/Cockgorithm/CockgorithmGameContent';
import { CockgorithmGameResult } from '../../components/Cockgorithm/CockgorithmGameResult';
import { CockgorithmGameLoading } from './../../components/Cockgorithm/CockgorithmGameLoading';
import {
  CockgorithmCocktail,
  CockgorithmResData,
} from '../../../../types/cockgorithmType';
import { GET_COCKGORITHM_COCKTAIL } from '../../constants/api';
import { cockgorithmSlice } from '../../store/cockgorithmSlice';
import { useAppSelector, useAppDispatch } from './../../store/store';

export const CockgorithmModal = () => {
  const { selectedGame, isLoadingOpen, isGameResultOpen, filters } =
    useAppSelector((state) => state.cockgorithm);

  const dispatch = useAppDispatch();

  const {
    setIsModalOpen,
    setIsFoundCocktail,
    setCocktailInfo,
    setIsGameResultOpen,
  } = cockgorithmSlice.actions;

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
            dispatch(setIsFoundCocktail(true));
            dispatch(setCocktailInfo(fetchedCocktail));
          } else {
            dispatch(setIsFoundCocktail(false));
          }
        } catch (error) {
          alert(error);
        } finally {
          dispatch(setIsGameResultOpen(true));
        }
      }, 2000);
    }
  }, [isLoadingOpen]);

  return (
    <>
      <Dimmed onClick={() => dispatch(setIsModalOpen(false))} />
      <Modal>
        <MainSection>
          <GameTitle>
            <span>
              {selectedGame.gameEmoji}
              {selectedGame.message}
            </span>
          </GameTitle>
          {!isLoadingOpen ? (
            <CockgorithmGameContent />
          ) : !isGameResultOpen ? (
            <CockgorithmGameLoading />
          ) : (
            <CockgorithmGameResult />
          )}
        </MainSection>
        <CustomCloseButton onClick={() => dispatch(setIsModalOpen(false))} />
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
