import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Card } from "components/card/Card";
import { mkSimpleTemplate, withViewport } from "test-utils";
import { Recipe } from "types";
import { CardsGrid } from "./CardsGrid";
import cocktailsRaw from "../../mocks/data/cocktails.json";

const cocktails = cocktailsRaw as Recipe[];

const getCards = (count: number) =>
  cocktails.slice(0, count).map((x) => <Card key={x.name} recipe={x} />);

export default {
  title: "components/CardsGrid",
  component: CardsGrid,
  decorators: [(story) => <div className="bg-primary">{story()}</div>],
} as ComponentMeta<typeof CardsGrid>;

const Template = mkSimpleTemplate(CardsGrid);

export const OneCard = Template.bind({});
OneCard.args = { children: <Card recipe={cocktails[0]} /> };

export const NoCardsDefault = Template.bind({});
export const NoCardsCustom = Template.bind({});
NoCardsCustom.args = {
  whenEmpty: <h1>Nothing to see here!</h1>,
  className: "text-red-500",
};

export const ThreeCards = Template.bind({});
ThreeCards.args = { children: getCards(3) };

export const ThreeCardsTablet: ComponentStory<typeof CardsGrid> = () => (
  <CardsGrid>
    <Card recipe={cocktails[0]} />
    <Card recipe={cocktails[1]} />
    <Card recipe={cocktails[2]} />
  </CardsGrid>
);
withViewport(ThreeCardsTablet, "tablet");
ThreeCardsTablet.args = { children: getCards(3) };

export const ThreeCardsMobile = Template.bind({});
withViewport(ThreeCardsMobile);
ThreeCardsMobile.args = { children: getCards(3) };

export const FourCards = Template.bind({});
FourCards.args = { children: getCards(4) };

export const ManyCards = Template.bind({});
ManyCards.args = { children: getCards(9) };
