import styled from 'styled-components';

export const CockgorithmGameLoading = () => {
  return <Loading>결과 로딩중..</Loading>;
};

const Loading = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: midnightblue;
`;
