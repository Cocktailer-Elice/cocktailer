import styled from 'styled-components';

import { IGame } from '../../pages/Cockgorithm/CockgorithmPage';

interface CockgorithmGameListProps {
  gameDatas: IGame[];
  handleGameClick: (game: IGame) => void;
}

const gameColors = [
  '#ff6b6b',
  '#f06595',
  '#cc5de8',
  '#845ef7',
  '#5c7cfa',
  '#339af0',
  '#22b8cf',
  '#20c997',
  '#51cf66',
  '#94d82d',
  '#fcc419',
  '#ff922b',
];

export const CockgorithmGameList = ({
  gameDatas,
  handleGameClick,
}: CockgorithmGameListProps) => {
  return (
    <GameList>
      {gameDatas.map((game, index) => (
        <Game
          key={index}
          nth={index}
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

const Game = styled.div<{ nth: number }>`
  width: 70%;
  height: 120px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  padding: 20px;
  margin-bottom: 40px;
  background-color: ${(props) =>
    props.nth ? gameColors[props.nth] : '#ff6b6b'};
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
