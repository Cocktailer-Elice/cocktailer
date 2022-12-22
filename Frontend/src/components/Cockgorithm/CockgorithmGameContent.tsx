import styled from 'styled-components';

import { IGame } from '../../pages/Cockgorithm/CockgorithmPage';

interface CockgorithmGameContentProps {
  selectedGame: IGame;
  questionCounter: number;
  addFilter: (filter: string) => void;
  increaseQuestionCounter: () => void;
}

export const CockgorithmGameContent = ({
  selectedGame,
  questionCounter,
  addFilter,
  increaseQuestionCounter,
}: CockgorithmGameContentProps) => {
  const { filterName } = selectedGame.questions[questionCounter];
  return (
    <GameContent>
      <Question>{selectedGame.questions[questionCounter].question}</Question>
      <OptionContainer>
        {selectedGame.questions[questionCounter].options.map(
          (option, index) => (
            <Option
              key={index}
              onClick={() => {
                increaseQuestionCounter();
                addFilter(`${filterName}:${option.filterValue}`); // 추후 유저의 응답을 세세하게 저장하려면 변경
              }}
            >
              {option.optionName}
            </Option>
          ),
        )}
      </OptionContainer>
    </GameContent>
  );
};

const GameContent = styled.div`
  width: 100%;
  height: 450px;
  background-color: purple;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Question = styled.div`
  background-color: red;
  height: 20%;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OptionContainer = styled.div`
  width: 100%;
  height: 80%;
  padding: 50px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: orange;
`;

const Option = styled.div`
  width: 50%;
  height: 100%;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
`;
