import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from './GlobalStyles';
import { Header } from './containers/Main/Header/Header';
import { Router } from './Router';

export const App = () => {
  return (
    <AppLayout>
      <Helmet />
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </AppLayout>
  );
};

const AppLayout = styled.div`
  width: 480px;
  min-height: 100vh;
  background-color: #fff;
  border: 1px solid #ddd;
  margin: auto;
  position: relative;
`;
