import { API_ROUTE } from "api";
// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from "msw";

import cocktails from "../data/cocktails.json";

export const allRecipes = rest.get(
  API_ROUTE.recipes.all,
  (req, res, { json }) => {
    const params = {
      limit: (req.url.searchParams.get("limit") as string) || "10",
      offset: (req.url.searchParams.get("offset") as string) || "0",
    };

    const limit = parseInt(params.limit, 10);
    const offset = parseInt(params.offset, 10);

    return res(
      json({
        params: req,
        limit,
        offset,
        total: cocktails.length,
        data: cocktails.slice(offset, offset + limit),
      })
    );
  }
);
