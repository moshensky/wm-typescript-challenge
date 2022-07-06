import { Card } from "components/card";
import { Recipe } from "types";

const spritzVeneziano: Recipe = {
  name: "Spritz Veneziano",
  glass: "old-fashioned",
  category: "Sparkling Cocktail",
  ingredients: [
    {
      unit: "cl",
      amount: 6,
      ingredient: "Prosecco",
    },
    {
      unit: "cl",
      amount: 4,
      ingredient: "Aperol",
    },
    {
      special: "Splash of Soda water",
    },
  ],
  garnish: "Half an orange slice",
  preparation:
    "Build into an old-fashioned glass filled with ice. Top with a splash of soda water.",
};

// TODO: REMOVE THIS CODE AND IMPLEMENT A NICE GRID!
const Homepage = () => {
  return (
    <main>
      <div className="mb-4 space-y-3 rounded border border-gray-200 bg-white/25 p-5 text-sm">
        <p className="block text-radial">
          👷🏻‍♂️ Please remove this block and show the{" "}
          <strong>most popular recipes</strong> here.
        </p>
        <p className="block">
          <span>You can use the api endpoint </span>
          <code className="text-sm font-light">/api/recipes/popular</code>.
        </p>
      </div>
      <div>
        <Card recipe={spritzVeneziano} />
      </div>
    </main>
  );
};

export default Homepage;
