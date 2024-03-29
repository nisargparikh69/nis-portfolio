import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio text link", () => {
  render(<App />);
  const linkElement = screen.getByText(/i love machines/i);
  expect(linkElement).toBeInTheDocument();
});
