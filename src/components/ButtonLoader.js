import React from "react";

import Loader from "./Loader";

const ButtonLoader = ({ children, loader = false, ...buttonProps }) => (
  <button {...buttonProps}>
    {loader && <Loader />}
    {children}
  </button>
);

export default ButtonLoader;
