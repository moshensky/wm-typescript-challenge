import { CardsGrid } from "components";
import { Card } from "components/card";
import { useEffect, useState } from "react";
import { Recipe } from "types";

const Homepage = () => {
  const [data, setData] = useState<ReadonlyArray<Recipe>>([]);
  useEffect(() => {
    let ignore = false;

    fetch(`/api/recipes/popular`)
      .then((response) => response.json())
      // TODO: data validation, i.e. io-ts
      .then((response) => {
        if (!ignore) {
          setData(response.cocktails);
        }
      })
      // TODO: handle error
      .catch((_error) => {
        if (!ignore) {
          throw new Error("Error handling not implemented");
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <h1>Popular cocktails</h1>
      <CardsGrid className="mt-4">
        {data.map((x) => (
          <Card key={x.name} recipe={x} />
        ))}
      </CardsGrid>
    </>
  );
};

export default Homepage;
