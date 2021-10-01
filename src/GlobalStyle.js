import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #5BC0EB;
    --green: #9BC53D;
    --red: #C3423F;
    --black: #0B0500;
    --grey: #545E56;
    --white: #F9F9F9;
  }

  * {
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    background: var(--white);
  }
`