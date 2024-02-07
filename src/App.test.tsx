import React from "react";
import { render, screen, act } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  act(() => {
    const linkElement = screen.getByText(/confirm/i);
    expect(linkElement).toBeInTheDocument();
  });
});
