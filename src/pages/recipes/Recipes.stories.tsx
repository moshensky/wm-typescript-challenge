import { ComponentMeta } from "@storybook/react";
import { mkSimpleTemplate } from "test-utils";
import { ROUTES } from "router/routes";
import { withRouter } from "storybook-addon-react-router-v6";
import {
  getByText,
  screen,
  userEvent,
  waitFor,
} from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Recipes } from "./Recipes";

export default {
  title: "pages/recipes/Recipes",
  component: Recipes,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: `${ROUTES.RECIPES}/:page`,
      routeParams: { page: "1" },
    },
  },
} as ComponentMeta<typeof Recipes>;

const Template = mkSimpleTemplate(Recipes);

const getBtn = async (name: "Previous" | "Next", idx: 0 | 1) => {
  const btn = await screen
    .findAllByRole("button", { name }, { timeout: 5000 })
    .then((x) => x[idx]);
  expect(btn).toBeDefined();
  return btn;
};

const getCardsGrid = () => screen.getByTestId(/cards-grid/);

export const Primary = Template.bind({});
Primary.play = async () => {
  // Assert first page is loaded
  // const firstPage = await getElements();
  const firstPagePrevBtn = await getBtn("Previous", 0);
  const firstPageCardsGrid = getCardsGrid();
  expect(firstPageCardsGrid.childNodes.length).toEqual(8);
  expect(getByText(firstPageCardsGrid, /Vesper/)).toBeInTheDocument();

  // Assert go to last page from first
  await userEvent.click(firstPagePrevBtn);
  await waitFor(() =>
    expect(screen.getByText(/Caipirinha/)).toBeInTheDocument()
  );
  const lastPageCardsGrid = getCardsGrid();
  expect(lastPageCardsGrid.childNodes.length).toEqual(5);
  const lastPageNextBtn = await getBtn("Next", 0);

  // Assert go to first page from last
  await userEvent.click(lastPageNextBtn);
  await waitFor(() => expect(screen.getByText(/Vesper/)).toBeInTheDocument());

  // Assert go to second page from first via bottom next btn
  const firstPageNextBtn = await getBtn("Next", 1);
  await userEvent.click(firstPageNextBtn);
  await waitFor(() =>
    expect(screen.getByText(/Planter's Punch/)).toBeInTheDocument()
  );
};
