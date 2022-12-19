import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
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

  input:focus, textarea:focus {
    outline: none;
  }
`;
