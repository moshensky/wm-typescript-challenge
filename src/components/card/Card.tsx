/**
 * TODO: This is an example card without any props.
 */

import { Recipe, AmountIngredient, Ingredient, SpecialIngredient } from "types";

type Props = {
  recipe: Recipe;
};

const formatAmountIngredient = ({
  unit,
  amount,
  ingredient,
}: AmountIngredient): string => `${amount} ${unit} ${ingredient}`;

const isSpecialIngredient = (x: Ingredient): x is SpecialIngredient =>
  "special" in x;

export const Card = ({
  recipe: { name, category, ingredients, preparation, garnish },
}: Props) => {
  return (
    <div className="flex border border-gray-200 bg-white/50 p-4">
      <div className="block space-y-2">
        <h2 className="text-2xl font-bold">{name}</h2>
        <span className="mr-1 inline-block rounded bg-pink-200 py-1 px-2 text-xs font-semibold uppercase text-pink-800 last:mr-0">
          {category}
        </span>

        <h3 className="text-lg font-bold">Ingredients</h3>
        <ul className="list-inside list-disc px-1 text-sm">
          {ingredients.map((x) => {
            const ingredient = isSpecialIngredient(x)
              ? x.special
              : formatAmountIngredient(x);
            return <li key={ingredient.replace(/\s/g, "-")}>{ingredient}</li>;
          })}
        </ul>

        <h3 className="text-lg font-bold">Preparation</h3>
        <div className="text-sm">{preparation}</div>

        <h3 className="text-lg font-bold">Garnish</h3>
        <div className="text-sm">{garnish}</div>
      </div>
    </div>
  );
};
