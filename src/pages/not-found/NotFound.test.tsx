import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { NotFound } from "./NotFound";

it("renders page", () => {
  render(<NotFound />, { wrapper: BrowserRouter });
  expect(
    screen.getByText(/Sorry we couldn't find this page/i)
  ).toBeInTheDocument();
});

it("navigates to home", async () => {
  render(<NotFound />, { wrapper: BrowserRouter });
  const link = screen.getByRole("link", { name: "back to homepage" });
  expect(link).toHaveAttribute("href", "/");
});
