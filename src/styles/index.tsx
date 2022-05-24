import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    box-sizing: border-box;
    min-height: 100%;
    height: 100%;
  }
  *,
  *:after,
  *:before {
    box-sizing: inherit;
  }
  body {
    font-family: sans-serif;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    margin-top: 50px;
    background: white;
  }
  `;