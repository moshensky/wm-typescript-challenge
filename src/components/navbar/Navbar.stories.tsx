import { MemoryRouter } from "react-router-dom";
import { ComponentMeta } from "@storybook/react";
import { screen, userEvent, within } from "@storybook/testing-library";
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
SmallMobile.play = async () => {
  const darkScreen = screen.getByTestId("dark");
  const hamburgerBtn = within(darkScreen).getByTitle("Open main menu");
  await userEvent.click(hamburgerBtn);
};
