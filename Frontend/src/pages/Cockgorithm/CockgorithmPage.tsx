import styled from 'styled-components';
import { CockgorithmModal } from '../../containers/Cockgorithm/CockgorithmModal';
import { CockgorithmGameList } from './../../containers/Cockgorithm/CockgorithmGameList';

export const CockgorithmPage = () => {
  return (
    <Container>
      <CockgorithmGameList />
      <CockgorithmModal />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
`;
