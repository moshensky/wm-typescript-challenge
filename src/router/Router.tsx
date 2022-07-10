import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../layouts/main";
import { Recipes, NotFound, Popular } from "../pages";
import { ROUTES } from "./routes";

export const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<Popular />} />
        <Route path={`${ROUTES.RECIPES}`} element={<Recipes />}>
          <Route path=":page" element={<Recipes />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
