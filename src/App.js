import React, { useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--text-color", chosenTheme.text);
    root.style.setProperty("--body-color", chosenTheme.body);
    root.style.setProperty("--highlight-color", chosenTheme.highlight);
  }, []);

  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={chosenTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
