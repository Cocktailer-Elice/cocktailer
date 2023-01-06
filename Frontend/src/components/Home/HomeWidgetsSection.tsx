import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { HomeWidget } from './HomeWidget';
import { contentMenus } from '../../constants/pages';

export const HomeWidgetsSection = () => {
  return (
    <Container>
      {contentMenus.map((contentMenu, index) => (
        <Link key={index} to={contentMenu.link}>
          <HomeWidget title={contentMenu.pageName} emoji={contentMenu.emoji} />
        </Link>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px;
`;
