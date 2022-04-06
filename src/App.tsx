import React from "react";
import { createGlobalStyle } from "styled-components";
import HomePage from "./components/HomePage/HomePage";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: sans-serif;
    color: #112D4E;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <HomePage />
      </div>
    </>
  );
};

export default App;
