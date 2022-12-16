import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomePageButtonSection = () => {
  return (
    <HomePageButtonSectionWrapper>
      <span>홈 페이지 섹션</span>
      <Link to="/cockgorithm">칵고리즘</Link>
    </HomePageButtonSectionWrapper>
  );
};

const HomePageButtonSectionWrapper = styled.div`
  width: 100%;
  height: 20%;
  background-color: yellow;
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

export default HomePageButtonSection;
