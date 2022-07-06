export type AmountIngredient = {
  unit: string;
  amount: number;
  ingredient: string;
};

export type SpecialIngredient = {
  special: string;
};

export type Ingredient = AmountIngredient | SpecialIngredient;
