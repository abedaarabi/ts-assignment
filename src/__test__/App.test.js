import { render, screen, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom";
import "./media-mock";
import App, { ISOSCELES, EQUILATERAL, SCALENE, INVALID } from "../App";

describe("<App />", () => {
  it("calculates the type of the triangle as Isosceles", () => {
    render(<App />);
    const inputs = screen.getAllByTestId("side"); //
    fireEvent.change(inputs[0], { target: { value: "200" } });
    fireEvent.change(inputs[1], { target: { value: "200" } });
    fireEvent.change(inputs[2], { target: { value: "300" } });
    const submitBtn = screen.getByDisplayValue("Draw");
    fireEvent.click(submitBtn);

    const triangleTypeNode = screen.getByTestId("triangle-type");

    // screen.debug();
    expect(triangleTypeNode).toHaveTextContent(ISOSCELES);
  });
  it("calculates the type of the triangle as Equilateral", () => {
    render(<App />);
    const inputs = screen.getAllByTestId("side"); //
    fireEvent.change(inputs[0], { target: { value: "200" } });
    fireEvent.change(inputs[1], { target: { value: "200" } });
    fireEvent.change(inputs[2], { target: { value: "200" } });
    const submitBtn = screen.getByDisplayValue("Draw");
    fireEvent.click(submitBtn);

    const triangleTypeNode = screen.getByTestId("triangle-type");

    // screen.debug();
    expect(triangleTypeNode).toHaveTextContent(EQUILATERAL);
  });
  it("calculates the type of the triangle as Scalene", () => {
    render(<App />);
    const inputs = screen.getAllByTestId("side"); //
    fireEvent.change(inputs[0], { target: { value: "150" } });
    fireEvent.change(inputs[1], { target: { value: "200" } });
    fireEvent.change(inputs[2], { target: { value: "160" } });
    const submitBtn = screen.getByDisplayValue("Draw");
    fireEvent.click(submitBtn);

    const triangleTypeNode = screen.getByTestId("triangle-type");

    // screen.debug();
    expect(triangleTypeNode).toHaveTextContent(SCALENE);
  });
  it("Invalid triangle", () => {
    render(<App />);
    const inputs = screen.getAllByTestId("side"); //
    fireEvent.change(inputs[0], { target: { value: "500" } });
    fireEvent.change(inputs[1], { target: { value: "200" } });
    fireEvent.change(inputs[2], { target: { value: "160" } });
    const submitBtn = screen.getByDisplayValue("Draw");
    fireEvent.click(submitBtn);

    const triangleTypeNode = screen.getByTestId("triangle-type");

    // screen.debug();
    expect(triangleTypeNode).toHaveTextContent(INVALID);
  });
});
