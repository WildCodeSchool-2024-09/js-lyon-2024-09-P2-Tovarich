import { Link } from "react-router-dom";

interface cocktailInfo {
  image: string;
  name: string;
}

interface CocktailListProps {
  cocktailData: cocktailInfo[];
}

function Cocktail({ cocktailData }: CocktailListProps) {
  return (
    <>
      <div className="totalCocktail">
        {cocktailData.map((cocktailDetail) => (
          <article className="infoCocktail" key={cocktailDetail.name}>
            <img src={cocktailDetail.image} alt={cocktailDetail.name} />
            <h2>{cocktailDetail.name}</h2>
            {/* <button type="button" onClick={() => setCurrentLocation("/Recipe")}>
              More Information
            </button> */}
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
