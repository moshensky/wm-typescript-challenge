import { withRouter } from "storybook-addon-react-router-v6";
import { ComponentMeta } from "@storybook/react";
import { mkSimpleTemplate } from "test-utils";
import { rest } from "msw";
import { API_ROUTE } from "api";
import { Page } from "./Page";

export default {
  title: "pages/recipes/Page",
  component: Page,
  decorators: [withRouter],
  args: {
    page: 1,
    itemsPerPage: 8,
  },
} as ComponentMeta<typeof Page>;

const Template = mkSimpleTemplate(Page);

export const Primary = Template.bind({});
export const LoadedWithoutData = Template.bind({});
LoadedWithoutData.parameters = {
  msw: {
    handlers: {
      allRecipes: rest.get(API_ROUTE.recipes.all, (req, res, { json }) =>
        res(json({ total: 0, data: [] }))
      ),
    },
  },
};

export const LoadingState = Template.bind({});
LoadingState.parameters = {
  msw: {
    handlers: {
      allRecipes: rest.get(API_ROUTE.recipes.all, (req, res, { delay }) =>
        res(delay("infinite"))
      ),
    },
  },
};

export const FailureBehavior = Template.bind({});
FailureBehavior.parameters = {
  msw: {
    handlers: {
      allRecipes: rest.get(API_ROUTE.recipes.all, (req, res, { status }) =>
        res(status(500))
      ),
    },
  },
};
