import { MemoryRouter } from "react-router-dom";
import { ComponentMeta } from "@storybook/react";
import { mkSimpleTemplateWithDarkTheme, withViewport } from "test-utils";
import { Navbar } from "./Navbar";

export default {
  title: "components/Navbar",
  component: Navbar,
  decorators: [(story) => <MemoryRouter>{story()}</MemoryRouter>],
} as ComponentMeta<typeof Navbar>;

const Template = mkSimpleTemplateWithDarkTheme(Navbar);

export const Primary = Template.bind({});

export const SmallMobile = Template.bind({});
withViewport(SmallMobile);
