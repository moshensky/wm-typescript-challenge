import { ComponentMeta } from "@storybook/react";
import { mkSimpleTemplateWithDarkTheme } from "test-utils";
import { Spinner } from "./Spinner";

export default {
  title: "components/Spinner",
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template = mkSimpleTemplateWithDarkTheme(Spinner);

export const Primary = Template.bind({});
