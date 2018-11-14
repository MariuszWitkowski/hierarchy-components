import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
// const Loader = () => <div data-testid="loader">Loading...</div>;
const Loader = styled.div.attrs({ "data-testid": "loader" })`
  border: 3px solid #f3f3f3;
  border-top: 3px solid #39d;
  border-radius: 50%;
  display: inline-block;
  width: 14px;
  height: 14px;
  margin-right: 10px;
  animation: ${spin} 2s linear infinite;
`;

export default Loader;
