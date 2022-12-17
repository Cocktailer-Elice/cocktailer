import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HomePageButton from './../../components/Home/HomePageButton';

const HomePageButtonSection = () => {
  return (
    <HomePageButtonSectionWrapper>
      <Link to="/cockcipe">
        <HomePageButton pageName="칵시피" />
      </Link>
      <Link to="/cockflow">
        <HomePageButton pageName="칵플로우" />
      </Link>
      <Link to="/cockgorithm">
        <HomePageButton pageName="칵고리즘" />
      </Link>
    </HomePageButtonSectionWrapper>
  );
};

const HomePageButtonSectionWrapper = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid gray;
  padding: 30px;
  margin-bottom: 10px;
`;

export default HomePageButtonSection;
