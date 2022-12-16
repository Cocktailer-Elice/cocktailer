import styled from 'styled-components';

import HomePageButtonSection from '../../containers/Home/HomePageButtonSection';
import HomeSubCarousel from '../../containers/Home/HomeSubCarousel';
import HomeMainCarousel from './../../containers/Home/HomeMainCarousel';

const HomePage = () => {
  return (
    <HomePageWrapper>
      <HomeMainCarousel />
      <HomePageButtonSection />
      <HomeSubCarousel />
      <HomeSubCarousel />
    </HomePageWrapper>
  );
};

const HomePageWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  padding: 5px;
  box-sizing: border-box;
  background-color: tomato;
`;

export default HomePage;
