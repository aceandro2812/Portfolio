import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  :root {
    --text-color: ${({ theme }) => theme.text};
    --secondary-text-color: ${({ theme }) => theme.secondaryText};
    --highlight-color: ${({ theme }) => theme.highlight};
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: var(--text-color);
    display: flex;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  `;
