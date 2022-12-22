import styled from 'styled-components';

import { CockgorithmModal } from '../../containers/Cockgorithm/CockgorithmModal';
import { CockgorithmGameList } from './../../containers/Cockgorithm/CockgorithmGameList';
import { useState } from 'react';
import gameDatas from './gameDatas.json';

export interface IGame {
  gameTitle: string;
  questions: {
    question: string;
    options: { optionName: string; filter: string }[];
  }[];
}

export const CockgorithmPage = () => {
  const [modal, setModal] = useState(false);
  const [seletedGame, setSelectedGame] = useState<IGame>(gameDatas[0]);

  const toggleModal = () => {
    setModal((curr) => !curr);
  };

  const changeSelectedGame = (game: IGame) => {
    setSelectedGame(game);
  };

  return (
    <Container>
      <CockgorithmGameList
        toggleModal={toggleModal}
        gameDatas={gameDatas}
        changeSelectedGame={changeSelectedGame}
      />
      {modal ? (
        <CockgorithmModal toggleModal={toggleModal} seletedGame={seletedGame} />
      ) : (
        <></>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
`;
