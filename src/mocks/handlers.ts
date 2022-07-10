import { allRecipes } from "./handlers/allRecipes";
import { popularRecipes } from "./handlers/popularRecipes";

export const handlersMap = {
  allRecipes,
  popularRecipes,
};
export const handlers = Object.values(handlersMap);
