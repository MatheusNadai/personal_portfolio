import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
  a {
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
  body {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    overflow-x: hidden;
  }
  body::-webkit-scrollbar{
    width: 12px;
  }
  body::-webkit-scrollbar-track{
    background: ${props => props.theme.colors.primary};
  }
  body::-webkit-scrollbar-thumb{
    background-color:#000;
    border-radius: 10px ;

  }
  body, input, textarea, select, button {
  font: 400 1rem ${props => props.theme.font.primary};
}
`;

export default GlobalStyles;
