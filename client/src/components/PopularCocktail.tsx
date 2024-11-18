import type { CocktailProsTypes } from "../types/CocktailProsTypes";
import { Link } from "react-router-dom";

interface cocktailProps {
  recipeData: CocktailProsTypes[];
}

function PopularCocktail({ recipeData }: cocktailProps) {
  return (
    <>
      <h2 className="popularTitle">Popular refreshing cocktail</h2>
      {recipeData.map((recipePopular) => (
        <article className="infoRecipe" key={recipePopular.idDrink}>
          <h2>Recipe of the {recipePopular.strDrink}</h2>
          <section className="image">
            <img
              src={recipePopular.strDrinkThumb}
              alt={recipePopular.strDrink}
            />
            <button type="button">
              <Link to={`/Recipe/${recipePopular.idDrink}`}>
                More information
              </Link>
            </button>
          </section>
          <section className="instructions">
            <ul>
              Ingredients
              <li>
                <p>
                  {recipePopular.strMeasure1} of {recipePopular.strIngredient1}
                </p>
              </li>
              <li>
                <p>
                  {recipePopular.strMeasure2} of {recipePopular.strIngredient2}
                </p>
              </li>
              <li>
                <p>
                  {recipePopular.strMeasure3} of {recipePopular.strIngredient3}
                </p>
              </li>
            </ul>
            <h3>Instructions to recreate {recipePopular.strDrink}</h3>
            <p>{recipePopular.strInstructions}</p>
          </section>
        </article>
      ))}
    </>
  );
}

export default PopularCocktail;
