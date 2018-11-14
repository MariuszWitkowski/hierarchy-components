import React from "react";
import Button from "@material-ui/core/Button";

import Loader from "./Loader";

const ButtonLoader = ({ children, loader = false, ...buttonProps }) => (
  <Button variant="contained" color="primary" {...buttonProps}>
    {loader && <Loader />}
    {children}
  </Button>
);

export default ButtonLoader;
