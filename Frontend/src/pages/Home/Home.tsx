import styled from 'styled-components';

import HomeWidgetsContainer from '../../containers/Home/HomeWidgetsContainer';
import HomeSubCarousel from '../../containers/Home/HomeSubCarousel';
import HomeMainCarousel from '../../containers/Home/HomeMainCarousel';

const Home = () => {
  return (
    <Container>
      <Section>
        <HomeMainCarousel />
      </Section>
      <Section>
        <HomeWidgetsContainer />
      </Section>
      <Section>
        <HomeSubCarousel />
      </Section>
      <Section>
        <HomeSubCarousel />
      </Section>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid gray;
`;

const Section = styled.div`
  width: 100%;
  height: 20%;
  border: 1px solid gray;
  margin-bottom: 10px;
`;

export default Home;
