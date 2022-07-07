import { WarningMessage } from "components";

// TODO: REMOVE THIS CODE AND IMPLEMENT A NICE GRID!
export const Recipes = () => {
  // fetch(`/api/recipes/all?${new URLSearchParams({ offset: "70" })}`)
  //   .then((response) => response.json())
  //   .then(console.log);

  // fetch(`/api/recipes/popular`)
  //   .then((response) => response.json())
  //   .then(console.log);

  return (
    <WarningMessage
      title={
        <>
          👷🏻‍♂️ Please remove this block and show <strong>all the recipes</strong>{" "}
          here, paged by 10.
        </>
      }
      message={
        <>
          <span>You can use the api endpoint </span>
          <code className="text-sm font-light">/api/recipes/all</code>.
        </>
      }
    />
  );
};
