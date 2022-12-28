import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import axios from 'axios';
import 'swiper/css/bundle';

import { App } from './App';
import { muiTheme, theme } from './theme';
import { store } from './store/store';

axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MUIThemeProvider theme={muiTheme}>
          <App />
        </MUIThemeProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
