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
      <figure>
        <img src={cocktailData.strDrinkThumb} alt={cocktailData.strDrink} />
        <p>{cocktailData.strDrink}</p>
        <button type="button">
          <Link to={`/Recipe/${cocktailData.idDrink}`}>More information</Link>
        </button>
      </figure>
    </>
  );
}

export default Cocktail;
