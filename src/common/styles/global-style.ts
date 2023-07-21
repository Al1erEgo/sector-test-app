import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
  }

  #root {
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
