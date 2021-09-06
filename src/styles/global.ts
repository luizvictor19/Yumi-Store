import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --purple: #8F4BC7;
    --light-purple: #DCA8EE;
    --dark-purple: #BB7AAB;
    --dark-blue: #192067;
    --blue: #6A90E1;
    --light-blue: #69CCE2;
    --black: #0A0A09;
    --orange: #FF9B2D;
    --yellow: #FFCE3B;
    --white: #E5E5E5;
    --red: #D5222B;
    --dark-salmon: #F25553;
    --salmon: #FF9790;
  }
  
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
  body {
    background-color: var(--white);
    color: var(--black);
    font-size: 1rem;
    font-family: 'Mulish', sans-serif;
  }
  h1 {
    font-family: 'Merienda', cursive;
  }

  h2, h3 {
    font-family: 'Suez One', serif;
  }

  input {
    outline: none;
  }
  select {
    outline: none;
  }
  
`;