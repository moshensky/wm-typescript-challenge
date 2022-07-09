/* eslint-disable @typescript-eslint/no-redeclare */
import * as t from "io-ts";
import { Ingredient } from "./Ingredient";

export const Recipe = t.intersection([
  t.type({
    name: t.string,
    glass: t.string,
    ingredients: t.readonlyArray(Ingredient),
  }),
  t.partial({
    preparation: t.string,
    category: t.string,
    garnish: t.string,
  }),
]);
export type Recipe = t.TypeOf<typeof Recipe>;
export const Recipes = t.readonlyArray(Recipe);
