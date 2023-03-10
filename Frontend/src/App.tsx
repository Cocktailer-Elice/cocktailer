import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/Main/Header/Header';
import { Router } from './Router';
import { useEffect } from 'react';
import { useAppDispatch } from './store/store';
import { userRefresh } from './store/authActions';
import { useAuthentication } from './hooks/useAuthentication';
import { ScrollToTop } from './common/ScrollToTop';
import './styles/toast.css';

export const App = () => {
  const isLoggedIn = useAuthentication();
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
      <ToastContainer limit={1} />
      <ScrollToTop />
    </AppLayout>
  );
};

const AppLayout = styled.div`
  max-width: 720px;
  min-height: 100vh;
  background-color: #fff;
  margin: auto;
`;
