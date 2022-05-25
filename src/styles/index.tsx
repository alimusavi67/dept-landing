import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    box-sizing: border-box;
    min-height: 100%;
    height: 100%;
    font-size: 10px;
  }
  *,
  *:after,
  *:before {
    box-sizing: inherit;
  }
  body {
    font-family: Teko;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    background: white;
  }
  button {
      border: none;
  }
  `;