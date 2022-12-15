import Router from './Router';
import { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';
import { reset } from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    
  }
`;

function App() {
  return (
    <>
      <Helmet></Helmet>
      <GlobalStyles></GlobalStyles>
      <Router></Router>;
    </>
  );
}

export default App;
