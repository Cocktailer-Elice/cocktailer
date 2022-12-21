import styled from 'styled-components';

interface CockgorithmGameContentProps {
  question: string;
  increaseQuestionCounter: () => void;
}

export const CockgorithmGameContent = ({
  question,
  increaseQuestionCounter,
}: CockgorithmGameContentProps) => {
  return (
    <GameContent>
      <Question>{question}</Question>
      <ChoiceButtonContainer>
        <ChoiceButton onClick={increaseQuestionCounter}>선택1</ChoiceButton>
        <ChoiceButton onClick={increaseQuestionCounter}>선택2</ChoiceButton>
      </ChoiceButtonContainer>
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

const ChoiceButtonContainer = styled.div`
  width: 100%;
  height: 80%;
  padding: 50px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: orange;
`;

const ChoiceButton = styled.div`
  width: 50%;
  height: 100%;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
`;
