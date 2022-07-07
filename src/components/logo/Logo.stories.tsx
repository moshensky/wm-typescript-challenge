import { ComponentMeta } from "@storybook/react";
import { mkSimpleTemplateWithDarkTheme } from "test-utils";
import { Logo } from "./index";

export default {
  title: "components/Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template = mkSimpleTemplateWithDarkTheme(Logo);

export const Primary = Template.bind({});
