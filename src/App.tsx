import React from "react";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home/Home";
import { colors, fontSizes } from "./theme/theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: Open-sans, sans-serif;
    font-size: ${fontSizes.md};
    color: ${colors.darkBlue};
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Home />
      </div>
    </>
  );
};

export default App;
