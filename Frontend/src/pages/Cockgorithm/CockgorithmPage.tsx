import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { CockgorithmModal } from '../../containers/Cockgorithm/CockgorithmModal';
import { CockgorithmGameList } from './../../containers/Cockgorithm/CockgorithmGameList';
import { useAppSelector } from './../../store/store';

export const CockgorithmPage = () => {
  const { isModalOpen } = useAppSelector((state) => state.cockgorithm);

  return (
    <>
      <Helmet>
        <title>Cocktailer | 칵고리즘</title>
      </Helmet>
      <Container>
        <CockgorithmGameList />
        {isModalOpen && <CockgorithmModal />}
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: white;
`;
