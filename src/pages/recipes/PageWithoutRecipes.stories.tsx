import { MemoryRouter } from "react-router-dom";
import { ComponentMeta } from "@storybook/react";
import { mkSimpleTemplate } from "test-utils";
import { PageWithoutRecipes } from "./PageWithoutRecipes";

export default {
  title: "pages/recipes/PageWithoutRecipes",
  component: PageWithoutRecipes,
  decorators: [(story) => <MemoryRouter>{story()}</MemoryRouter>],
} as ComponentMeta<typeof PageWithoutRecipes>;

const Template = mkSimpleTemplate(PageWithoutRecipes);

export const Primary = Template.bind({});
