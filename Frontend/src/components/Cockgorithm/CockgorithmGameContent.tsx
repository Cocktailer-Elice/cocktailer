import { SetStateAction, useState, useEffect } from 'react';
import styled from 'styled-components';

import { IGame } from '../../pages/Cockgorithm/CockgorithmPage';
import { CockgorithmReqData } from '../../../../types/cockgorithmType';

interface CockgorithmGameContentProps {
  selectedGame: IGame;
  handleLoadingOpen: () => void;
  setFilters: React.Dispatch<SetStateAction<CockgorithmReqData>>;
}

export const CockgorithmGameContent = ({
  selectedGame,
  handleLoadingOpen,
  setFilters,
}: CockgorithmGameContentProps) => {
  const [questionCounter, setQuestionCounter] = useState(0);

  const increaseQuestionCounter = () => {
    setQuestionCounter((curr) => curr + 1);
  };

  useEffect(() => {
    if (questionCounter === 5) {
      handleLoadingOpen();
    }
  }, [questionCounter]);

  const handleOptionClick = (option: {
    optionName: string;
    filterValue: string;
  }) => {
    const { filterName } = selectedGame.questions[questionCounter];
    setFilters((curr: CockgorithmReqData) => {
      if (filterName === 'ingredients') {
        curr[filterName] = [...curr[filterName], option.filterValue];
      } else if (
        filterName === 'category' ||
        filterName === 'alcohol' ||
        filterName === 'degree'
      ) {
        curr[filterName] = option.filterValue;
      }
      return curr;
    });
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
  padding: 50px 10px;
  height: 10%;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    font-size: 13px;
  }
`;

const OptionContainer = styled.div`
  width: 100%;
  height: 90%;
  margin: 50px 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
`;

const Option = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.indigo9};
  font-weight: 600;

  padding: 10px;

  border: 5px solid ${(props) => props.theme.colors.indigo4};
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.indigo3};

  @media screen and (max-width: 500px) {
    font-size: 11px;
  }

  cursor: pointer;
`;
