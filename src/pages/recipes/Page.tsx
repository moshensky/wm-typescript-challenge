import { getAllRecipes, GetAllRecipesArgs } from "api";
import {
  CardsGrid,
  MainHeader,
  Pager,
  Spinner,
  WarningMessage,
} from "components";
import { Card } from "components/card";
import { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "router/routes";
import { Recipe } from "types";
import { PageWithoutRecipes } from "./PageWithoutRecipes";

export type PageState =
  | {
      type: "loading";
    }
  | {
      type: "error";
      error: string;
    }
  | {
      type: "loaded";
      data: ReadonlyArray<Recipe>;
      totalItems: number;
    }
  | {
      type: "loaded-no-data";
    };

type PageAction =
  | { type: "send-request" }
  | { type: "success"; data: ReadonlyArray<Recipe>; totalItems: number }
  | { type: "failure"; error: string };

// eslint-disable-next-line consistent-return
export function pageReducer(_state: PageState, action: PageAction): PageState {
  switch (action.type) {
    case "failure": {
      return {
        type: "error",
        error: action.error,
      };
    }
    case "success": {
      return action.data.length > 0
        ? {
            type: "loaded",
            data: action.data,
            totalItems: action.totalItems,
          }
        : { type: "loaded-no-data" };
    }
    case "send-request": {
      return { type: "loading" };
    }
  }
}

const mkEmptyWarning = (message: string) => (
  <WarningMessage title="👷🏻‍♂️ Cocktails are gone!" message={message} />
);

export const getQueryParams = (
  page: number,
  itemsPerPage: number
): GetAllRecipesArgs => {
  const limit = itemsPerPage < 1 ? 1 : itemsPerPage;
  const p = page < 1 ? 1 : page;
  return {
    limit: limit.toString(),
    offset: (limit * (p - 1)).toString(),
  };
};

type Props = {
  page: number;
  itemsPerPage: number;
};

// eslint-disable-next-line consistent-return
export const Page = ({ page, itemsPerPage }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(pageReducer, { type: "loading" });
  const navigate = useNavigate();
  useEffect(() => {
    dispatch({ type: "send-request" });
    return getAllRecipes(
      getQueryParams(page, itemsPerPage),
      ({ data, total }) =>
        dispatch({ type: "success", data, totalItems: total }),
      (error) => dispatch({ type: "failure", error })
    );
  }, [page, itemsPerPage]);

  switch (state.type) {
    case "loading": {
      return (
        <>
          Loading data...
          <Spinner />
        </>
      );
    }
    case "loaded": {
      const { totalItems } = state;
      const handleNavToPrev = () => {
        const newPage =
          page === 1 ? Math.ceil(state.totalItems / itemsPerPage) : page - 1;
        navigate(`${ROUTES.RECIPES}/${newPage}`);
      };
      const handleNavToNext = () => {
        const newPage = page * itemsPerPage > totalItems ? 1 : page + 1;
        navigate(`${ROUTES.RECIPES}/${newPage}`);
      };
      const disable = totalItems <= itemsPerPage;
      return (
        <>
          <MainHeader>Cocktails</MainHeader>
          <Pager
            disabledNext={disable}
            disabledPrevious={disable}
            onNext={handleNavToNext}
            onPrevious={handleNavToPrev}
          />
          <CardsGrid className="my-4">
            {state.data.map((x) => (
              <Card key={x.name} recipe={x} />
            ))}
          </CardsGrid>
          <Pager
            disabledNext={disable}
            disabledPrevious={disable}
            onNext={handleNavToNext}
            onPrevious={handleNavToPrev}
          />
        </>
      );
    }
    case "loaded-no-data": {
      return page === 1 ? (
        mkEmptyWarning("Nothing to be seen here :(")
      ) : (
        <PageWithoutRecipes />
      );
    }
    case "error": {
      return mkEmptyWarning(state.error);
    }
  }
};
