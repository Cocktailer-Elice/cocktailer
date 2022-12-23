import { SetStateAction, useState, useEffect } from 'react';
import styled from 'styled-components';

import { IGame } from '../../pages/Cockgorithm/CockgorithmPage';
import { CockgorithmReqData } from '../../../../types/cockgorithmType';

interface CockgorithmGameContentProps {
  selectedGame: IGame;
  toggleGameEnd: () => void;
  setFilters: React.Dispatch<SetStateAction<CockgorithmReqData>>;
}

close;

export const CockgorithmGameContent = ({
  selectedGame,
  toggleGameEnd,
  setFilters,
}: CockgorithmGameContentProps) => {
  const [questionCounter, setQuestionCounter] = useState(0);

  const increaseQuestionCounter = () => {
    setQuestionCounter((curr) => curr + 1);
  };

  useEffect(() => {
    if (questionCounter === 5) {
      toggleGameEnd();
    }
  }, [questionCounter]);

  return questionCounter < 5 ? (
    <GameContent>
      <Question>{selectedGame.questions[questionCounter].question}</Question>
      <OptionContainer>
        {selectedGame.questions[questionCounter].options.map(
          (option, index) => (
            <Option
              key={`${questionCounter} + ${index}`}
              onClick={() => {
                const { filterName } = selectedGame.questions[questionCounter];
                console.log('클릭됨');
                setFilters((curr: CockgorithmReqData) => {
                  if (filterName === 'ingredients') {
                    console.log('나는 재료요');
                    curr[filterName] = [
                      ...curr[filterName],
                      option.filterValue,
                    ];
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
              }}
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
  width: 10px;
  height: 100%;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
`;
