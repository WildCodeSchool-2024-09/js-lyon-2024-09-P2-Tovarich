import "./Recipe.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeAppearance from "../components/RecipeAppearance/RecipeAppearance";

function Recipe() {
  const [cocktailRecipe, setRecipe] = useState([]);
  const { idDrink } = useParams();

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
      .then((res) => res.json())
      .then((recipe) => setRecipe(recipe.drinks));
  }, [idDrink]);

  return (
    <>
      {cocktailRecipe === null ? (
        <h2>Ceci n'est pas une recette</h2>
      ) : (
        <RecipeAppearance recipeData={cocktailRecipe} />
      )}
    </>
  );
}

export default Recipe;
