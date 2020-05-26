import { createGlobalStyle } from 'styled-components';

import { colors } from './variables';
import GithubBackground from '../assets/background_img.svg';

const { light2 } = colors;

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${light2};
    background-image: url(${GithubBackground});
    background-repeat: no-repeat;
    background-position: 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }
`;
