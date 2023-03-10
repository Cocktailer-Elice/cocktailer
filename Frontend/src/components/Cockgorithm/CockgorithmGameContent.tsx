import { useEffect } from 'react';
import styled from 'styled-components';

import { IGame } from '../../store/cockgorithmSlice';

interface CockgorithmGameContentProps {
  selectedGame: IGame;
  questionCounter: number;
  increaseQuestionCounter: () => void;
  setIsLoadingOpen: (boolean: boolean) => void;
  setFilters: (filterName: string, filterValue: string) => void;
}

export const CockgorithmGameContent = ({
  selectedGame,
  questionCounter,
  increaseQuestionCounter,
  setIsLoadingOpen,
  setFilters,
}: CockgorithmGameContentProps) => {
  useEffect(() => {
    if (questionCounter === 5) {
      setIsLoadingOpen(true);
    }
  }, [questionCounter]);

  const handleOptionClick = (option: {
    optionName: string;
    filterValue: string;
  }) => {
    const { filterName } = selectedGame.questions[questionCounter];
    const filterValue = option.filterValue;

    setFilters(filterName, filterValue);
    increaseQuestionCounter();
  };

  return questionCounter < 5 ? (
    <GameContent>
      <Question>{`Q${questionCounter + 1}. ${
        selectedGame.questions[questionCounter].question
      }`}</Question>
      <OptionContainer>
        {selectedGame.questions[questionCounter].options.map(
          (option, index) => (
            <Option
              key={`${questionCounter} + ${index}`}
              onClick={() => handleOptionClick(option)}
            >
              {option.optionName}
            </Option>
          ),
        )}
      </OptionContainer>
    </GameContent>
  ) : (
    <></>
  );
};

const GameContent = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Question = styled.div`
  height: 10%;
  margin-top: 10px;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  @media screen and (max-width: 500px) {
    font-size: 13px;
  }
`;

const OptionContainer = styled.div`
  width: 100%;
  height: 50%;
  margin: 30px 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
`;

const Option = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;

  padding: 10px;

  border: 5px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.2);

  @media screen and (max-width: 500px) {
    font-size: 11px;
  }

  cursor: pointer;

  :hover {
    scale: 1.02;
  }

  :active {
    scale: 0.97;
  }
`;
