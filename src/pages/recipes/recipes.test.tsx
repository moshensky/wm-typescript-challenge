import { render, screen } from "@testing-library/react";

import Homepage from "./index";

it("renders api message", () => {
  render(<Homepage />);
  expect(screen.getByText("/api/recipes/all")).toBeInTheDocument();
});
