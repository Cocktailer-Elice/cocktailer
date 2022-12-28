import styled from 'styled-components';

export const CockgorithmGameLoading = () => {
  return <Loading>Loading...</Loading>;
};

const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 30px;
  font-style: italic;
  color: whitesmoke;
`;
