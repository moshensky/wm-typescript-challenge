import { lazy } from "react";

export * from "./not-found";

export const Homepage = lazy(() => import("./homepage"));
export const Recipes = lazy(() => import("./recipes"));
