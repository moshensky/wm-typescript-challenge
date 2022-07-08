import { ComponentMeta } from "@storybook/react";
import { mkSimpleTemplateWithDarkTheme, withViewport } from "test-utils";
import { Pager } from "./Pager";

export default {
  title: "components/Pager",
  component: Pager,
} as ComponentMeta<typeof Pager>;

const Template = mkSimpleTemplateWithDarkTheme(Pager);

export const Primary = Template.bind({});

export const Mobile = Template.bind({});
withViewport(Mobile);

export const DisabledNext = Template.bind({});
DisabledNext.args = { disabledNext: true };

export const DisabledPrev = Template.bind({});
DisabledPrev.args = { disabledPrevious: true };
