import styled from 'styled-components';

export const CockgorithmGameResult = () => {
  return <GameResult>게임결과</GameResult>;
};

const GameResult = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: brown;
`;
