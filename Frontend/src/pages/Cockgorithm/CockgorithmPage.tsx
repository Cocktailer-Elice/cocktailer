import styled from 'styled-components';
import { CockgorithmModal } from '../../containers/Cockgorithm/CockgorithmModal';
import { CockgorithmGameList } from './../../containers/Cockgorithm/CockgorithmGameList';
import { useState } from 'react';

export const CockgorithmPage = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal((curr) => !curr);
  };

  return (
    <Container>
      <CockgorithmGameList toggleModal={toggleModal} />
      {modal ? <CockgorithmModal toggleModal={toggleModal} /> : <></>}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
`;
