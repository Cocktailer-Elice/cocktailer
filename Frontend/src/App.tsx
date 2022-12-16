import Router from './Router';
import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';
import { reset } from 'styled-reset';
import Header from './containers/Header/Header';

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    
  }
  
  a {
    text-decoration: none;
  }

  input:focus, text:focus {
    outline: none;
  }
`;

function App() {
  return (
    <StyledApp>
      <Helmet></Helmet>
      <GlobalStyles></GlobalStyles>
      <Header></Header>
      <Router></Router>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  width: 480px;
  height: 100vh;
  background-color: #fff;
  border: 1px solid #ddd;
  margin: auto;
`;

export default App;
