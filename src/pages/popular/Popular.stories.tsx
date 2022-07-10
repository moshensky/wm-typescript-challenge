import { ComponentMeta } from "@storybook/react";
import { mkSimpleTemplate } from "test-utils";
import { screen, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { rest } from "msw";
import { API_ROUTE } from "api";
import { Popular } from "./Popular";

export default {
  title: "pages/popular/Popular",
  component: Popular,
} as ComponentMeta<typeof Popular>;

const Template = mkSimpleTemplate(Popular);

export const Primary = Template.bind({});
Primary.play = async () => {
  await waitFor(() => expect(screen.getByText(/Vesper/)).toBeInTheDocument());
  expect(screen.getByTestId(/cards-grid/).childNodes.length).toEqual(5);
};

export const FailureBehavior = Template.bind({});
FailureBehavior.parameters = {
  msw: {
    handlers: {
      popularRecipes: rest.get(
        API_ROUTE.recipes.popular,
        (req, res, { status }) => res(status(500))
      ),
    },
  },
};
