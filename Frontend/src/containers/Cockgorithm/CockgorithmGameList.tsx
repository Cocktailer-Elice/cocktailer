import styled from 'styled-components';

import { IGame } from '../../pages/Cockgorithm/CockgorithmPage';

interface CockgorithmGameListProps {
  gameDatas: IGame[];
  handleGameClick: (game: IGame) => void;
}

export const CockgorithmGameList = ({
  gameDatas,
  handleGameClick,
}: CockgorithmGameListProps) => {
  return (
    <GameList>
      {gameDatas.map((game, index) => (
        <Game
          key={index}
          onClick={() => {
            handleGameClick(game);
          }}
        >
          {game.gameTitle}
        </Game>
      ))}
    </GameList>
  );
};

const GameList = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: orange;
  padding: 20px;
`;

const Game = styled.div`
  width: 100%;
  height: 150px;
  margin-bottom: 20px;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
`;
