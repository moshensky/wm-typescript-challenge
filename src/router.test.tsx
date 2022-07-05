import { Suspense, ReactElement } from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Router } from "./router";

const renderWithRouter = (ui: ReactElement, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: MemoryRouter }),
  };
};

test("full app rendering/navigating", async () => {
  const { user } = await renderWithRouter(
    <Suspense fallback={null}>
      <Router />
    </Suspense>
  );

  // Check if the homepage api text is visible
  expect(await screen.findByText("/api/recipes/popular")).toBeInTheDocument();

  // Check on the recipes link in the navbar
  await user.click(await screen.findByTestId(/navbar-link--recipes/));

  // Check if the recipes api text is visible
  expect(screen.getByText("/api/recipes/all")).toBeInTheDocument();
});

test("landing on a bad page", () => {
  render(
    <MemoryRouter initialEntries={["/some/bad/route"]}>
      <Router />
    </MemoryRouter>
  );
  expect(
    screen.getByText(/Sorry we couldn't find this page/i)
  ).toBeInTheDocument();
});
