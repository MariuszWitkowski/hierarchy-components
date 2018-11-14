import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import ContextHierarchy from "./components/cases/context/Hierarchy";
import MobxHierarchy from "./components/cases/mobx/Hierarchy";

import "./styles.css";

const Column = styled.div`
  display: inline-block;
  width: 46%;
  margin: 1%;
`;

const App = () => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Column>
        <ContextHierarchy />
      </Column>
      <Column>
        <MobxHierarchy />
      </Column>
    </div>
  );
};

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
