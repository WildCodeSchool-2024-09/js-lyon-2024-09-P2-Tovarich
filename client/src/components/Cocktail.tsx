import { Link } from "react-router-dom";

interface cocktailPros {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

interface CocktailListProps {
  cocktailData: cocktailPros[];
}

function Cocktail({ cocktailData }: CocktailListProps) {
  return (
    <>
      <div className="totalCocktail">
        {cocktailData.map((cocktailDetail) => (
          <article className="infoCocktail" key={cocktailDetail.idDrink}>
            <img
              src={cocktailDetail.strDrinkThumb}
              alt={cocktailDetail.strDrink}
            />
            <h2>{cocktailDetail.strDrink}</h2>
            <Link to="/recipe">
              <button type="button">More Information</button>
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}

export default Cocktail;
