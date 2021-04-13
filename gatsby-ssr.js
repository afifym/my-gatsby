import React from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import theme from "./src/styles/theme"

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin:0;
        padding:0;
        display: none;
    }

    body, html{
        font-family: ${({ theme }) => theme.fonts.main};
        height: 100%;
        background-color:${({ theme }) => theme.colors.light1};
    }

    img {
      width: 100%;
      display: block;
    }
    a {
      text-decoration: none;
    }

    li {
      list-style: none;
    }

    button {
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
}

`

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
