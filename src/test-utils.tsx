import { ComponentStory, ReactFramework, StoryContext } from "@storybook/react";
import { ComponentProps, ComponentType } from "react";

export function mkTemplateWithDarkTheme<T extends ComponentType<any>>(
  fn: (
    props: ComponentProps<T>,
    ctx: StoryContext<ReactFramework, ComponentProps<T>>
  ) => JSX.Element
): ComponentStory<T> {
  const Template: ComponentStory<T> = (args, ctx) => (
    <>
      <div className="light mb-3 bg-primary">{fn(args, ctx)}</div>
      <div className="dark bg-primary">{fn(args, ctx)}</div>
    </>
  );
  return Template;
}

export function mkSimpleTemplateWithDarkTheme<T extends ComponentType<any>>(
  Component: T
): ComponentStory<T> {
  return mkTemplateWithDarkTheme<T>((props) => <Component {...props} />);
}

export function mkSimpleTemplate<T extends ComponentType<any>>(
  Component: T
): ComponentStory<T> {
  const Template: ComponentStory<T> = (args) => <Component {...args} />;
  return Template;
}

type Viewport = "mobile1" | "mobile2" | "tablet";
// eslint-disable-next-line no-unused-vars
const viewportWidth: { [Property in Viewport]: number } = {
  mobile1: 320,
  mobile2: 414,
  tablet: 834,
};

export function withViewport(
  comp: ComponentStory<() => JSX.Element>,
  viewport: Viewport = "mobile1"
): void {
  // eslint-disable-next-line no-param-reassign
  comp.parameters = {
    viewport: {
      defaultViewport: viewport,
    },
    chromatic: { viewports: [viewportWidth[viewport]] },
  };
}
