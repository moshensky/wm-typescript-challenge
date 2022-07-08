import { isSpecialIngredient, formatAmountIngredient } from "./Card";

test("isSpecialIngredient should succeed", () => {
  expect(
    isSpecialIngredient({
      special: "Dash of Angostura bitters (optional)",
    })
  ).toBeTruthy();
});

test("isSpecialIngredient should fail", () => {
  expect(
    isSpecialIngredient({
      unit: "cl",
      amount: 12,
      ingredient: "Ginger Ale",
    })
  ).toBeFalsy();
});

test("format with `ingredient` only", () =>
  expect(
    formatAmountIngredient({
      unit: "cl",
      amount: 4.5,
      ingredient: "Dark rum",
    })
  ).toEqual("4.5 cl Dark rum"));

test("format with `ingredient` and `label``", () =>
  expect(
    formatAmountIngredient({
      unit: "cl",
      amount: 1,
      ingredient: "Syrup",
      label: "Sugar syrup",
    })
  ).toEqual("1 cl Syrup (Sugar syrup)"));
