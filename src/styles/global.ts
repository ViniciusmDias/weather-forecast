import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body, input, button {
    font: 14px Arimo, sans-serif;
    letter-spacing: 0.5px;
    color: #3c3c3c;
  }
  #root {
    max-width: 960px;
    margin: 0 auto;
  }
  button {
    cursor: pointer;
  }
`;
