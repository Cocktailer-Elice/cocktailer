import styled from 'styled-components';

import { HomeWidgetsContainer } from '../../containers/Home/HomeWidgetsContainer';
import { HomeSubCarousel } from '../../containers/Home/HomeSubCarousel';
import { HomeMainCarousel } from '../../containers/Home/HomeMainCarousel';

export const Home = () => {
  return (
    <Container>
      <Section>
        <HomeMainCarousel />
      </Section>
      <Section>
        <HomeWidgetsContainer />
      </Section>
      <SectionHeader>칵테일 레시피 랭킹 TOP 10</SectionHeader>
      <Section>
        <HomeSubCarousel />
      </Section>
      <SectionHeader>유저 랭킹 TOP 10</SectionHeader>
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

const SectionHeader = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
  font-size: 16px;
`;
