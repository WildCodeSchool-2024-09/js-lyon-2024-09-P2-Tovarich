import type { CocktailProsTypes } from "../../types/CocktailProsTypes";

interface cocktailProps {
  recipeData: CocktailProsTypes[];
}

function RecipeAppearance({ recipeData }: cocktailProps) {
  return (
    <>
      {recipeData.map((recipeDetail) => (
        <article className="infoRecipe" key={recipeDetail.idDrink}>
          <h2>Recipe of the {recipeDetail.strDrink}</h2>
          <section className="image">
            <img src={recipeDetail.strDrinkThumb} alt={recipeDetail.strDrink} />
          </section>
          <section className="instructions">
            <ul>
              <h3>Ingredients</h3>
              <li>
                <p>
                  {recipeDetail.strMeasure1} of {recipeDetail.strIngredient1}
                </p>
              </li>
              <li>
                <p>
                  {recipeDetail.strMeasure2} of {recipeDetail.strIngredient2}
                </p>
              </li>
              <li>
                {recipeDetail.strMeasure3 === null ? (
                  ""
                ) : (
                  <p>
                    {recipeDetail.strMeasure3} of {recipeDetail.strIngredient3}
                  </p>
                )}
                {recipeDetail.strMeasure3 === null &&
                recipeDetail.strIngredient3 !== null ? (
                  <p>{recipeDetail.strIngredient3}</p>
                ) : (
                  ""
                )}
              </li>
            </ul>
            <h3>Instructions to recreate {recipeDetail.strDrink}</h3>
            <p>{recipeDetail.strInstructions}</p>
          </section>
        </article>
      ))}
    </>
  );
}

export default RecipeAppearance;
