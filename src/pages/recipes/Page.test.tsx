import { Recipe } from "types";
import { getQueryParams, pageReducer, PageState } from "./Page";
import cocktailsRaw from "../../mocks/data/cocktails.json";

const cocktails = cocktailsRaw as Recipe[];

describe("pageReducer", () => {
  const loadedNoDataState: PageState = { type: "loaded-no-data" };
  const loadingState: PageState = { type: "loading" };
  const loadedState: PageState = {
    type: "loaded",
    data: [cocktails[0]],
    totalItems: 2,
  };
  const errorState: PageState = {
    type: "error",
    error: "failed",
  };

  const states = [loadedNoDataState, loadingState, loadedState, errorState];
  states.map((x) =>
    describe(`when in "${x.type}" state`, () => {
      it("should transition to `loading` on `send-request`", () =>
        expect(pageReducer(x, { type: "send-request" })).toEqual(loadingState));

      it("should transition to `loaded` on `success`", () =>
        expect(
          pageReducer(x, {
            type: "success",
            data: [cocktails[0]],
            totalItems: 2,
          })
        ).toEqual(loadedState));

      it("should transition to `loaded-no-data` on `success` without data", () =>
        expect(
          pageReducer(x, { type: "success", data: [], totalItems: 0 })
        ).toEqual(loadedNoDataState));

      it("should transition to `error` on `failure`", () =>
        expect(pageReducer(x, { type: "failure", error: "failed" })).toEqual(
          errorState
        ));
    })
  );
});

describe("getQueryParams", () => {
  it("should get first page results when page < 1", () =>
    expect(getQueryParams(0, 8)).toEqual({
      limit: "8",
      offset: "0",
    }));

  it("should get first page results when itemsPerPage < 1", () =>
    expect(getQueryParams(2, -8)).toEqual({
      limit: "1",
      offset: "1",
    }));

  it("should get params", () =>
    expect(getQueryParams(2, 8)).toEqual({
      limit: "8",
      offset: "8",
    }));
});
