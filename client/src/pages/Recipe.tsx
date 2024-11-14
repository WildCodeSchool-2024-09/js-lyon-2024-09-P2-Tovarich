import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RecipeAppearance from "../components/RecipeAppearance";
import "./Recipe.css";

function Recipe() {
  const [cocktailRecipe, setRecipe] = useState([]);
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007")
      .then((res) => res.json())
      .then((recipe) => setRecipe(recipe.drinks));
  }, []);

  return (
    <>
      <Header />

      {cocktailRecipe.length === 0 ? (
        <p>Loading</p>
      ) : (
        <RecipeAppearance recipeData={cocktailRecipe} />
      )}
      <Footer />
    </>
  );
}

export default Recipe;
