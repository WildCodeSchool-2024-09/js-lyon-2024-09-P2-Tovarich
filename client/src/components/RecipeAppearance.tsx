interface cocktailPros {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strImageSource: string;
  strImageAttribution: string;
}

interface cocktailProps {
  recipeData: cocktailPros[];
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
              Ingredients
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
                <p>
                  {recipeDetail.strMeasure3} of {recipeDetail.strIngredient3}
                </p>
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
