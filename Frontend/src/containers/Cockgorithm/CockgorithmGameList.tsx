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

const Game = styled.div`
  width: 70%;
  height: 120px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  padding: 20px;
  margin-bottom: 40px;

  background-color: ${(props) => props.theme.colors.indigo5};
  border-radius: 30px;

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

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;
