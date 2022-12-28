import styled from 'styled-components';
import { useState } from 'react';

import { CockgorithmModal } from '../../containers/Cockgorithm/CockgorithmModal';
import { CockgorithmGameList } from './../../containers/Cockgorithm/CockgorithmGameList';
import gameDatas from './gameDatas.json';
import { useToggle } from './../../utils/customHooks';
import { Helmet } from 'react-helmet';

export interface IGame {
  gameEmoji: string;
  gameTitle: string;
  message: string;
  questions: {
    question: string;
    filterName: string;
    options: { optionName: string; filterValue: string }[];
  }[];
}

export const CockgorithmPage = () => {
  const {
    isOpen: isModalOpen,
    handleOpen: handleModalOpen,
    handleClose: handleModalClose,
  } = useToggle(false);

  const [seletedGame, setSelectedGame] = useState<IGame>(gameDatas[0]);

  const handleGameClick = (game: IGame) => {
    setSelectedGame(game);
    handleModalOpen();
  };

  return (
    <>
      <Helmet>
        <title>Cocktailer | 칵고리즘</title>
      </Helmet>
      <Container>
        <CockgorithmGameList
          gameDatas={gameDatas}
          handleGameClick={handleGameClick}
        />
        {isModalOpen && (
          <CockgorithmModal
            handleModalClose={handleModalClose}
            seletedGame={seletedGame}
          />
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: white;
`;
