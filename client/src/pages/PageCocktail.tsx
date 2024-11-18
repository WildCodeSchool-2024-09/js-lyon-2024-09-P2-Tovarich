import { useEffect, useState } from "react";
import "../components/RecipeAppearance.css";
import AlphabetList from "../components/AlphabetList";
import Cocktail from "../components/Cocktail";
import DropdownFilter from "../components/DropdownFilter";
import PopularCocktail from "../components/PopularCocktail";

function PageCocktail() {
  const generateKey = (pre: number) => {
    return `${pre}_${new Date().getTime()}`;
  };
  const [cocktailInformation, setCockail] = useState([]);
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
      .then((res) => res.json())
      .then((data) => setCockail(data.drinks));
  }, []);
  const [randomCocktail, setRandomCocktail] = useState([]);
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => setRandomCocktail(data.drinks));
  }, []);

  return (
    <>
      <PopularCocktail recipeData={randomCocktail} />
      <nav>
        <AlphabetList />
        <DropdownFilter />
      </nav>
      <main className="totalCocktail">
        {cocktailInformation.map((cocktailDetail, index) => (
          <Cocktail cocktailData={cocktailDetail} key={generateKey(index)} />
        ))}
      </main>
    </>
  );
}

export default PageCocktail;
