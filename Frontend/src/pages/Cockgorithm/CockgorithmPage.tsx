import styled from 'styled-components';

import { CockgorithmModal } from '../../containers/Cockgorithm/CockgorithmModal';
import { CockgorithmGameList } from './../../containers/Cockgorithm/CockgorithmGameList';
import { Helmet } from 'react-helmet';
import { useAppSelector } from './../../store/store';

export interface IGame {
  gameEmoji: string;
  gameTitle: string;
  message: string;
  questions: {
    question: string;
    filterName: string;
    options: { optionName: string; filterValue: string }[];
  }[];
}

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
