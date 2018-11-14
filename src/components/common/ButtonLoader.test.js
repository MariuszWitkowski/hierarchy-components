import React from "react";
import {
  cleanup,
  render,
  fireEvent,
  waitForElement
} from "react-testing-library";

import ButtonLoader from "./ButtonLoader";

describe("ButtonLoader", () => {
  afterEach(cleanup); // <-- add this

  test("Click in button", () => {
    const buttonText = "Click Me";
    const mockClick = jest.fn();

    const { getByText } = render(
      <ButtonLoader onClick={mockClick}>{buttonText}</ButtonLoader>
    );
    fireEvent.click(getByText(buttonText));

    expect(mockClick).toHaveBeenCalled();
  });

  test("Hide Loader in ButtonLoader", () => {
    const buttonText = "Click Me";
    const loader = false;

    const { container, getByTestId } = render(
      <ButtonLoader loader={loader}>{buttonText}</ButtonLoader>
    );
    // const loaderNode = waitForElement(() => !getByTestId('loader'))
    const loaderNode = container.querySelector(`[data-testid="loader"]`); // FIXME: znaleźć lepsze wyświetlanie ukrytego elementu

    expect(loaderNode).toBe(null);
  });

  test("Show Loader in ButtonLoader", () => {
    const buttonText = "Click Me";
    const loader = true;

    const { getByTestId } = render(
      <ButtonLoader loader={loader}>{buttonText}</ButtonLoader>
    );
    const loaderNode = getByTestId("loader");

    expect(loaderNode).not.toBe(null);
  });
});
