import styled from 'styled-components';
import { useState } from 'react';
import { CockgorithmGameContent } from './../../components/Cockgorithm/CockgorithmGameContent';
import { CockgorithmGameResult } from '../../components/Cockgorithm/CockgorithmGameResult';

interface CockgorithmModalProps {
  toggleModal: () => void;
}

export const CockgorithmModal = ({ toggleModal }: CockgorithmModalProps) => {
  const [questionCounter, setQuestionCounter] = useState(1);

  const increaseQuestionCounter = () => {
    setQuestionCounter((curr) => curr + 1);
  };

  return (
    <>
      <Dimmed onClick={toggleModal} />
      <Modal>
        <MainSection>
          <GameTitle>게임 타이틀</GameTitle>
          {questionCounter < 4 ? (
            <CockgorithmGameContent
              increaseQuestionCounter={increaseQuestionCounter}
            />
          ) : (
            <CockgorithmGameResult />
          )}
        </MainSection>
        <CloseButton onClick={toggleModal} />
      </Modal>
    </>
  );
};

const Modal = styled.div`
  width: 450px;
  min-height: 60%;
  position: fixed;
  top: 20%;
  padding: 30px;
  z-index: 11;
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dimmed = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
`;

const MainSection = styled.div`
  width: 100%;
  min-height: 450px;
  background-color: skyblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const GameTitle = styled.div`
  background-color: blue;
  height: 20px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled.div`
  width: 30px;
  height: 30px;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 10px;
`;
