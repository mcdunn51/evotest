import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders JSON form", () => {
  render(<App />);
  const linkElement = screen.getByText(/Evonetics quadruplex annotator/i);
  expect(linkElement).toBeInTheDocument();
});