import { lazy } from "react";

export * from "./not-found";

export const Popular = lazy(() => import("./popular"));
export const Recipes = lazy(() => import("./recipes"));
