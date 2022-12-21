import styled from 'styled-components';

interface CockgorithmGameListProps {
  toggleModal: () => void;
  changeSelectedGame: (gameTitle: string) => void;
}

// 기본 구현 : 프론트에서 배열로 관리
// 심화 구현 : 서버로부터 받음
const Games = ['Game1', 'Game2', 'Game3', 'Game4', 'Game5', 'Game6', 'Game7'];

export const CockgorithmGameList = ({
  toggleModal,
  changeSelectedGame,
}: CockgorithmGameListProps) => {
  return (
    <GameList>
      {Games.map((game, index) => (
        <Game
          key={index}
          onClick={() => {
            toggleModal();
            changeSelectedGame(game);
          }}
        >
          {game}
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
