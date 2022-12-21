import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { HomeWidget } from '../../components/Home/HomeWidget';

export const HomeWidgetsContainer = () => {
  return (
    <Container>
      <Link to="/cockcipe">
        <HomeWidget pageName="칵시피" />
      </Link>
      <Link to="/cockflow">
        <HomeWidget pageName="칵플로우" />
      </Link>
      <Link to="/cockgorithm">
        <HomeWidget pageName="칵고리즘" />
      </Link>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid gray;
  padding: 30px;
`;
