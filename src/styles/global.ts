import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body, input, button {
    font: 16px Arimo, sans-serif;
    letter-spacing: 1px;
  }
  #root {
    max-width: 960px;
    margin: 0 auto;
  }
  button {
    cursor: pointer;
  }
`;
