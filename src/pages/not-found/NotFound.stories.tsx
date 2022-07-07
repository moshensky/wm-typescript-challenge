import { MemoryRouter } from "react-router-dom";
import { ComponentMeta } from "@storybook/react";
import { mkSimpleTemplateWithDarkTheme } from "test-utils";
import { NotFound } from "./NotFound";

export default {
  title: "pages/NotFound",
  component: NotFound,
  decorators: [(story) => <MemoryRouter>{story()}</MemoryRouter>],
} as ComponentMeta<typeof NotFound>;

const Template = mkSimpleTemplateWithDarkTheme(NotFound);

export const Primary = Template.bind({});
