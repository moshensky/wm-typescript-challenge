import { ComponentMeta } from "@storybook/react";
import { mkSimpleTemplateWithDarkTheme } from "test-utils";
import { Recipe } from "types";
import { Card } from "./Card";

const spritzVeneziano: Recipe = {
  name: "Spritz Veneziano",
  glass: "old-fashioned",
  category: "Sparkling Cocktail",
  ingredients: [
    {
      unit: "cl",
      amount: 6,
      ingredient: "Prosecco",
    },
    {
      unit: "cl",
      amount: 4,
      ingredient: "Aperol",
    },
    {
      special: "Splash of Soda water",
    },
  ],
  garnish: "Half an orange slice",
  preparation:
    "Build into an old-fashioned glass filled with ice. Top with a splash of soda water.",
};

export default {
  title: "components/Card",
  component: Card,
  decorators: [(story) => <div className="bg-primary">{story()}</div>],
} as ComponentMeta<typeof Card>;

const Template = mkSimpleTemplateWithDarkTheme(Card);

export const Primary = Template.bind({});
Primary.args = {
  recipe: spritzVeneziano,
};

export const WithoutCategoryGarnishAndPrep = Template.bind({});
WithoutCategoryGarnishAndPrep.args = {
  recipe: {
    ...spritzVeneziano,
    category: undefined,
    garnish: undefined,
    preparation: undefined,
  },
};
