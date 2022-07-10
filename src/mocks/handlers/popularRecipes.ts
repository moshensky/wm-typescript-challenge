import { API_ROUTE } from "api";
// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from "msw";

import cocktails from "../data/cocktails.json";

export const popularRecipes = rest.get(
  API_ROUTE.recipes.popular,
  (req, res, { json }) => {
    return res(
      json({
        cocktails: cocktails.slice(0, 5),
      })
    );
  }
);
