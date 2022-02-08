import { render, screen, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom";
import "./media-mock";
import App from "../App";

describe("<App />", () => {
  it("calculates the type of the triangle", () => {
    render(<App />);
    const inputs = screen.getAllByTestId("side"); //
    fireEvent.change(inputs[0], { target: { value: "200" } });
    fireEvent.change(inputs[1], { target: { value: "200" } });
    fireEvent.change(inputs[2], { target: { value: "300" } });
    const submitBtn = screen.getByDisplayValue("Draw");
    fireEvent.click(submitBtn);

    const triangleTypeNode = screen.getByTestId("triangle-type");

    // screen.debug();
    expect(triangleTypeNode).toHaveTextContent("Isosceles");
  });
});
