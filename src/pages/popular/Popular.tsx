import { getPopularRecipes } from "api";
import { CardsGrid, WarningMessage } from "components";
import { Card } from "components/card";
import { useEffect, useState } from "react";
import { Recipe } from "types";

export const Popular = () => {
  const [data, setData] = useState<ReadonlyArray<Recipe>>([]);
  const [error, setError] = useState<string>();
  useEffect(
    () => getPopularRecipes(({ cocktails }) => setData(cocktails), setError),
    []
  );

  return error ? (
    <WarningMessage title="👷🏻‍♂️ Popular cocktails are gone!" message={error} />
  ) : (
    <>
      <h1 className="text-primary">Popular cocktails</h1>
      <CardsGrid className="mt-4">
        {data.map((x) => (
          <Card key={x.name} recipe={x} />
        ))}
      </CardsGrid>
    </>
  );
};
