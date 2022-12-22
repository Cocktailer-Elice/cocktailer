import styled from 'styled-components';

export const CockgorithmGameLoading = () => {
  return <Loading>Loading...</Loading>;
};

const Loading = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
  background-color: midnightblue;
`;
