import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from './GlobalStyles';
import { Header } from './containers/Main/Header/Header';
import { Router } from './Router';
import { useEffect } from 'react';
import { loginChecker } from './utils/loginChecker';
import { useAppDispatch } from './store/store';
import { userRefresh } from './store/authActions';

export const App = () => {
  const isLoggedIn = loginChecker();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(userRefresh());
    }
  }, [isLoggedIn]);
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
`;
