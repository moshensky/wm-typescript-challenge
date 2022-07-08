import { useParams } from "react-router-dom";
import { Page } from "./Page";
import { PageWithoutRecipes } from "./PageWithoutRecipes";

export const Recipes = () => {
  const routeParams = useParams();
  const page = parseInt(routeParams.page || "1", 10);

  return isNaN(page) ? (
    <PageWithoutRecipes />
  ) : (
    <Page page={page < 1 ? 1 : page} itemsPerPage={8} />
  );
};
