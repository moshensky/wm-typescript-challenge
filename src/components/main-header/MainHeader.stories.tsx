import { ComponentMeta } from "@storybook/react";
import { mkSimpleTemplateWithDarkTheme } from "test-utils";
import { MainHeader } from "./MainHeader";

export default {
  title: "components/MainHeader",
  component: MainHeader,
} as ComponentMeta<typeof MainHeader>;

const Template = mkSimpleTemplateWithDarkTheme(MainHeader);

export const Primary = Template.bind({});
Primary.args = {
  children: "Header sample",
};
