import { ComponentMeta, ComponentStory } from "@storybook/react";
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
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  recipe: spritzVeneziano,
};
