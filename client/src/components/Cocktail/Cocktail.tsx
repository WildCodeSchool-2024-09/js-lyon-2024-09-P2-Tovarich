import { Link } from "react-router-dom";

interface cocktailProps {
  cocktailData: {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
  };
}

function Cocktail({ cocktailData }: cocktailProps) {
  return (
    <>
      <figure className="infoCocktail">
        <img src={cocktailData.strDrinkThumb} alt={cocktailData.strDrink} />
        <h4>{cocktailData.strDrink}</h4>
        <button type="button">
          <Link to={`/Recipe/${cocktailData.idDrink}`}>More information</Link>
        </button>
      </figure>
    </>
  );
}

export default Cocktail;
