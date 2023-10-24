import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    -webkit-font-smoothing: antialiased;

    height: 100vh;
  }
  
  body, input, button, textarea {
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    font-size: 1.6rem;
    outline: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100}
  }

  button, a {
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover, a:hover {
    opacity: 0.9;
  }
`;