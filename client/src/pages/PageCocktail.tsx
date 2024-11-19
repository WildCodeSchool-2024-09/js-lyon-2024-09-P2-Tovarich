import { useEffect, useState } from "react";
import "../components/RecipeAppearance.css";
import AlphabetList from "../components/AlphabetList";
import Cocktail from "../components/Cocktail";
import DropdownFilter from "../components/DropdownFilter";

function PageCocktail() {
  const generateKey = (pre: number) => {
    return `${pre}_${new Date().getTime()}`;
  };
  const [cocktailInformation, setCocktail] = useState([]);
  const [cocktailCounter, setCocktailCounter] = useState(0);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
      .then((res) => res.json())
      .then((data) => {
        setCocktail(data.drinks);
        setCocktailCounter(data.drinks.length);
      });
  }, []);

  return (
    <>
      <nav>
        <AlphabetList />
        <DropdownFilter />
      </nav>
      <div className="cocktailCount">
        <h1>Cocktails</h1>
        <p> {cocktailCounter} Résultat(s)</p>
      </div>
      <main className="totalCocktail">
        {cocktailInformation.map((cocktailDetail, index) => (
          <Cocktail cocktailData={cocktailDetail} key={generateKey(index)} />
        ))}
      </main>
    </>
  );
}

export default PageCocktail;
