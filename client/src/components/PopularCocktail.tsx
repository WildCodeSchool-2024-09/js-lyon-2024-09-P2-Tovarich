import { Link } from "react-router-dom";
import type { CocktailProsTypes } from "../types/CocktailProsTypes";

import neonShaker from "../assets/images/neon-shaker.png";
import neonVerre from "../assets/images/neon-verre.png";

interface cocktailProps {
  recipeData: CocktailProsTypes[];
}

function PopularCocktail({ recipeData }: cocktailProps) {
  return (
    <>
      <h2 className="popularTitle">Popular refreshing cocktail</h2>
      {recipeData.map((recipePopular) => (
        <article className="refreshCocktail" key={recipePopular.idDrink}>
          <img className="neon" src={neonVerre} alt="neon verre" />
          <section className="refreshSection">
            <img
              src={recipePopular.strDrinkThumb}
              alt={recipePopular.strDrink}
            />
            <button type="button">
              <Link to={`/Recipe/${recipePopular.idDrink}`}>
                <h3>Recipe of the {recipePopular.strDrink}</h3>
              </Link>
            </button>
          </section>
          <img className="neon" src={neonShaker} alt="neon shaker" />
        </article>
      ))}
    </>
  );
}

export default PopularCocktail;
