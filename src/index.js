import React from "react";
import ReactDOM from "react-dom";

import ContextHierarchy from "./components/cases/context/Hierarchy";

import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ContextHierarchy />
    </div>
  );
};

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
