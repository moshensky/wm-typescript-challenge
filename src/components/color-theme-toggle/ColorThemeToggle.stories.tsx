import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ColorThemeToggle } from "./ColorThemeToggle";

export default {
  title: "components/ColorThemeToggle",
  component: ColorThemeToggle,
} as ComponentMeta<typeof ColorThemeToggle>;

const Template: ComponentStory<typeof ColorThemeToggle> = () => (
  <ColorThemeToggle />
);

export const Primary = Template.bind({});
