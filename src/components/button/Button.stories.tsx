import { ComponentMeta } from "@storybook/react";
import { mkSimpleTemplateWithDarkTheme } from "test-utils";
import { Button } from "./Button";

export default {
  title: "components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template = mkSimpleTemplateWithDarkTheme(Button);

export const Primary = Template.bind({});
Primary.args = {
  label: "Click me",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Click me",
  disabled: true,
};
