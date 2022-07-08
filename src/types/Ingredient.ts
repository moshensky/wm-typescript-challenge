export type AmountIngredient = {
  unit: string;
  amount: number;
  ingredient: string;
  label?: string;
};

export type SpecialIngredient = {
  special: string;
};

export type Ingredient = AmountIngredient | SpecialIngredient;
