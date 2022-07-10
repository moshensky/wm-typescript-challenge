import { withRouter } from "storybook-addon-react-router-v6";
import { ComponentMeta } from "@storybook/react";
import { mkSimpleTemplateWithDarkTheme, withViewport } from "test-utils";
import { NotFound } from "./NotFound";

export default {
  title: "pages/NotFound",
  component: NotFound,
  decorators: [withRouter],
} as ComponentMeta<typeof NotFound>;

const Template = mkSimpleTemplateWithDarkTheme(NotFound);

export const Primary = Template.bind({});

export const SmallMobile = Template.bind({});
withViewport(SmallMobile, "mobile2");
