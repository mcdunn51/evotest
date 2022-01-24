import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders H1", () => {
  render(<App />);
  const linkElement = screen.getByText(/Evonetics quadruplex annotator/i);
  expect(linkElement).toBeInTheDocument();
});

