/* eslint-disable @typescript-eslint/no-redeclare */
import * as t from "io-ts";
import { decodeOrThrow, Recipes } from "types";

export type IgnoreRequest = () => void;

export const getData =
  <T>(path: string, decoder: t.Decoder<any, T>) =>
  (
    onSuccess: (response: T) => void,
    onFailure: (error: string) => void
  ): IgnoreRequest => {
    let ignore = false;
    fetch(path)
      .then((response) => response.json())
      .then(decodeOrThrow(decoder))
      .then((response) => {
        if (!ignore) {
          onSuccess(response);
        }
      })
      // TODO: improve error handling
      .catch((error) => {
        if (!ignore) {
          onFailure(typeof error === "string" ? error : "Failed to get data.");
        }
      });

    return () => {
      ignore = true;
    };
  };

const AllRecipesResponse = t.type({
  total: t.number,
  data: Recipes,
});
export type AllRecipesResponse = t.TypeOf<typeof AllRecipesResponse>;

export type GetAllRecipesArgs = {
  limit: string;
  offset: string;
};

export const getAllRecipes = (
  args: GetAllRecipesArgs,
  onSuccess: (response: AllRecipesResponse) => void,
  onFailure: (error: string) => void
): IgnoreRequest =>
  getData(`/api/recipes/all?${new URLSearchParams(args)}`, AllRecipesResponse)(
    onSuccess,
    onFailure
  );

const PopularRecipesResponse = t.type({
  cocktails: Recipes,
});
export type PopularRecipesResponse = t.TypeOf<typeof PopularRecipesResponse>;

export const getPopularRecipes = getData(
  "/api/recipes/popular",
  PopularRecipesResponse
);
