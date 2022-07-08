import { WarningMessage } from "components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "router/routes";

export const PageWithoutRecipes = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(ROUTES.RECIPES, { replace: true });
  }, [navigate]);

  return (
    <WarningMessage
      title="👷🏻‍♂️ Cocktails are gone from this page!"
      message="You will be redirected to Recipes."
    />
  );
};
