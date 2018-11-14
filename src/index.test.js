import React from "react";
import { cleanup, render } from "react-testing-library";

import App from "./index";

afterEach(cleanup); // <-- add this

test("h1 has text", () => {
  const { container } = render(<App />);
  const h1 = container.querySelector("h1");

  expect(h1.innerHTML).toBe("Hello CodeSandbox");
});
