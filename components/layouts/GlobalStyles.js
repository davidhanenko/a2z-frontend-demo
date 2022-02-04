import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  html {
    --blue: #536ade;
    --lightBlue: #b5dff0;
    --darkBlue: #3c457d;
    --dark: #323545;
    --lightGray: #e6e8f4;
    --gray: #8b8b8b;
    --white: #f5f5f5;
    --offWhite: #ededed;
  
    
    --blueHover: #536ade60;
    --darkBlueHover: #3c457d90;

    --maxWidth: 1400px;
    --minWidth: 850px;          
    --navHeight: 90px;
    --searchHeight: 3rem; 
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
    font-size: 62.5%;

    scroll-behavior: smooth;
  }
  *, *:before, *:after{
    box-sizing: inherit;
  }

  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    line-height: 2;
    scroll-behavior: smooth;
    background: var(--offWhite);
 
  }
  a {
    text-decoration: none;
  }
 
`;

export { GlobalStyles };
