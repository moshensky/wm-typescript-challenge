/* eslint-disable @typescript-eslint/no-redeclare */
import * as t from "io-ts";

export const AmountIngredient = t.intersection([
  t.type({
    unit: t.string,
    amount: t.number,
    ingredient: t.string,
  }),
  t.partial({
    label: t.string,
  }),
]);
export type AmountIngredient = t.TypeOf<typeof AmountIngredient>;

export const SpecialIngredient = t.type({
  special: t.string,
});
export type SpecialIngredient = t.TypeOf<typeof SpecialIngredient>;

export const Ingredient = t.union([AmountIngredient, SpecialIngredient]);
export type Ingredient = t.TypeOf<typeof Ingredient>;
