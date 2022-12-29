import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { CockgorithmGameListContainer } from './../../containers/Cockgorithm/CockgorithmGameListContainer';
import { useAppSelector } from './../../store/store';
import { CockgorithmModalContainer } from '../../containers/Cockgorithm/CockgorithmModalContainer';

export const CockgorithmPage = () => {
  const { isModalOpen } = useAppSelector((state) => state.cockgorithm);

  return (
    <>
      <Helmet>
        <title>Cocktailer | 칵고리즘</title>
      </Helmet>
      <Container>
        <CockgorithmGameListContainer />
        {isModalOpen && <CockgorithmModalContainer />}
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: white;
`;
