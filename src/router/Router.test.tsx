import { Suspense, ReactElement } from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { mockMatchMedia } from "hooks/useDarkMode";
import { Router } from "./Router";

mockMatchMedia();
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
  expect(await screen.findByText(/Popular cocktails/)).toBeInTheDocument();

  // Check on the recipes link in the navbar
  await user.click(await screen.findByTestId(/navbar-link--recipes/));

  // Check if the recipes api text is visible
  expect(screen.getByText(/Loading data/)).toBeInTheDocument();
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
