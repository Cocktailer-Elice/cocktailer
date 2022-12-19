import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Widget from '../../components/Home/Widget';

const HomeWidgetsContainer = () => {
  return (
    <Container>
      <Link to="/cockcipe">
        <Widget pageName="칵시피" />
      </Link>
      <Link to="/cockflow">
        <Widget pageName="칵플로우" />
      </Link>
      <Link to="/cockgorithm">
        <Widget pageName="칵고리즘" />
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

export default HomeWidgetsContainer;
