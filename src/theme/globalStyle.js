import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
      --white: #ffffff;
      --white-smoke: #f1f1f1;
      --light-gray: #c7c6c6;
      --gray: #aaa;
      --dark: #222;
      --red: #f11b31;
      --black: #000000;
      --color1: #FF6002;
      --color2: #FFD166;
      --color3: #06D6A0;
      --color4: #118AB2;
      --color5: #073B4C;
      --warm: #4e5c77;
    }

    *,
    *:before,
    *:after {
      outline: 0 !important;
      box-sizing: border-box;
    }
    body {
      margin: 0;
      overflow-y: auto;
      overflow-x: hidden;
      font-size: ${props => props.theme.fontSize};
      background-color: ${props => props.theme.backgroundColor};
      
      &.font-loaded {
          font-family: 'Poppins', sans-serif;
      }
    }

    h1, h2, h3, h4, h5, h6, figure, ul, ol, label {
      margin: 0;
      padding: 0;
      color: ${props => props.theme.name === 'light' ? 'var(--black)' : 'var(--white)'};
    }
    
    p {
      color: ${props => props.theme.name === 'light' ? 'var(--black)' : 'var(--white)'};
    }

    ul {
      list-style: none;
    }

    a {
      user-select: none;
      text-decoration: none;
      cursor: pointer;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
      -webkit-box-shadow: 0 0 0 1000px transparent inset;
      transition: background-color 5000s ease-in-out 0s;
    }

    input[type=number]::-webkit-outer-spin-button,
    input[type=number]::-webkit-inner-spin-button,
    select[type=number]::-webkit-outer-spin-button,
    select[type=number]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[type=number],
    select[type=number] {
      -moz-appearance: textfield;
    }

    input:-moz-focusring,
    select:-moz-focusring,
    textarea:-moz-focusring {
      outline: none;
    }

    select::-ms-clear,
    select::-ms-expand,
    input::-ms-clear,
    input::-ms-expand,
    textarea::-ms-clear {
      display: none !important;
    }
`;

export default GlobalStyle;
