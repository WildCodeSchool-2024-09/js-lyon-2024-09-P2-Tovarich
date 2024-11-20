import { useEffect, useState } from "react";
import "../components/RecipeAppearance.css";
import AlphabetList from "../components/AlphabetList";
import Cocktail from "../components/Cocktail";
import CocktailButton from "../components/CocktailButton";
import PopularCocktail from "../components/PopularCocktail";

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

  const [randomCocktail, setRandomCocktail] = useState([]);
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => setRandomCocktail(data.drinks));
  }, []);

  const [letter, setLetter] = useState("");
  useEffect(() => {
    if (letter !== "") {
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`,
      )
        .then((res) => res.json())
        .then((data) => {
          setCocktail(data.drinks);
          setCocktailCounter(data.drinks.length);
        });
    }
  }, [letter]);

  const [alcool, setAlcool] = useState(false);
  useEffect(() => {
    if (alcool === true) {
      fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic",
      )
        .then((res) => res.json())
        .then((data) => {
          setCocktail(data.drinks);
          setCocktailCounter(data.drinks.length);
        });
    }
  }, [alcool]);

  const [noAlcool, setNoAlcool] = useState(false);
  useEffect(() => {
    if (noAlcool === true) {
      fetch(
        " https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic",
      )
        .then((res) => res.json())
        .then((data) => {
          setCocktail(data.drinks);
          setCocktailCounter(data.drinks.length);
        });
    }
  }, [noAlcool]);

  return (
    <>
      <PopularCocktail recipeData={randomCocktail} />
      <nav>
        <AlphabetList letter={letter} setLetter={setLetter} />
        <CocktailButton
          alcool={alcool}
          setAlcool={setAlcool}
          noAlcool={noAlcool}
          setNoAlcool={setNoAlcool}
        />
      </nav>
      <div className="cocktailCount">
        <h1>Cocktails</h1>
        <p> {cocktailCounter} Résultat(s)</p>
      </div>
      <main className="totalCocktail">
        {cocktailInformation === null ? (
          <h2>Pas de cocktail</h2>
        ) : (
          cocktailInformation.map((cocktailDetail, index) => (
            <Cocktail cocktailData={cocktailDetail} key={generateKey(index)} />
          ))
        )}
      </main>
    </>
  );
}

export default PageCocktail;
