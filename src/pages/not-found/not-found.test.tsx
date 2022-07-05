import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { NotFound } from "./not-found";

it("renders page", () => {
  render(<NotFound />, { wrapper: BrowserRouter });
  expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
});

it("navigates to home", async () => {
  render(<NotFound />, { wrapper: BrowserRouter });
  const link = screen.getByRole("link", { name: "Home Page" });
  expect(link).toHaveAttribute("href", "/");
});
