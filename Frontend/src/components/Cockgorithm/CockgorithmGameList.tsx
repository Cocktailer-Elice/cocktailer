import styled from 'styled-components';
import { motion } from 'framer-motion';

import { gameDatas } from '../../constants/gameDatas';
import { IGame } from '../../store/cockgorithmSlice';

interface CockgorithmGameListProps {
  selectedGame: IGame;
  resetCockgorithmState: () => void;
  setSelectedGame: (game: IGame) => void;
  setIsModalOpen: (boolean: boolean) => void;
}

export const CockgorithmGameList = ({
  selectedGame,
  resetCockgorithmState,
  setSelectedGame,
  setIsModalOpen,
}: CockgorithmGameListProps) => {
  return (
    <GameList>
      {gameDatas.map((game, index) => (
        <Game
          key={index}
          layoutId={game.gameEmoji}
          gameColor={game.gameColor}
          onClick={() => {
            resetCockgorithmState();
            setSelectedGame(game);
            setIsModalOpen(true);
          }}
        >
          <GameEmoji>{game.gameEmoji}</GameEmoji>
          <GameTitle>{game.gameTitle}</GameTitle>
        </Game>
      ))}
    </GameList>
  );
};

const GameList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0px;
`;

const Game = styled(motion.div)<{ gameColor: string }>`
  width: 70%;
  height: 120px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  padding: 20px;
  margin-bottom: 40px;
  background-color: ${(props) =>
    props.gameColor ? props.gameColor : '#ff6b6b'};
  border-radius: 30px;
  border: 5px solid rgba(0, 0, 0, 0.1);

  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 500px) {
    height: 100px;
  }
`;

const GameEmoji = styled.div`
  font-size: 30px;

  @media screen and (max-width: 500px) {
    font-size: 25px;
  }
`;

const GameTitle = styled.div`
  font-size: 18px;
  color: white;
  margin-top: 15px;

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;
