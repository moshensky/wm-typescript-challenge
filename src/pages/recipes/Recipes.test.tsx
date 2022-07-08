import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ROUTES } from "router/routes";
import { Recipes } from "./Recipes";

it("should render", () => {
  render(
    <MemoryRouter initialEntries={[`${ROUTES.RECIPES}`]}>
      <Recipes />
    </MemoryRouter>
  );
  expect(screen.getByText(/Loading data/)).toBeInTheDocument();
});
