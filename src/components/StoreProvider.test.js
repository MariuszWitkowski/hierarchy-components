import React from "react";
import TestRenderer from "react-test-renderer";

import { StoreProvider } from "./StoreProvider";

describe("StoreProvider", () => {
  test("default loader", () => {
    const testRenderer = TestRenderer.create(<StoreProvider />);
    const instance = testRenderer.root.instance;
    expect(instance.state.loader).toBe(false);
  });

  test("set loader to true", () => {
    const testRenderer = TestRenderer.create(<StoreProvider />);
    const instance = testRenderer.root.instance;
    instance.setLoader(true);
    expect(instance.state.loader).toBe(true);
  });
});
