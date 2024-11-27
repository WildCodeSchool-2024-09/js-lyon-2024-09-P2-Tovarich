import { useEffect, useState } from "react";
import "../components/Filter/Filter.css";
import "../components/RecipeAppearance/RecipeAppearance.css";
import AlphabetList from "../components/AlphabetList/AlphabetList";
import Cocktail from "../components/Cocktail/Cocktail";
import PopularCocktail from "../components/Cocktail/PopularCocktail";
import CocktailButton from "../components/Filter/CocktailButton/CocktailButton";
import FilterCategories from "../components/Filter/FilterCategory/FilterCategory";
import FilterGlasses from "../components/Filter/FilterGlasses/FilterGlasses";
import FilterIngredients from "../components/Filter/FilterIngredients/FilterIngredients";
import Input from "../components/Filter/Input/Input";

interface cocktailProps {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

function PageCocktail() {
  const generateKey = (pre: number) => {
    return `${pre}_${new Date().getTime()}`;
  };
  const [cocktailInformation, setCocktail] = useState<cocktailProps[]>([]);
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

  const [glass, setGlass] = useState("");
  useEffect(() => {
    if (glass !== "") {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glass}`)
        .then((res) => res.json())
        .then((data) => {
          setCocktail(data.drinks);
          setCocktailCounter(data.drinks.length);
        });
    }
  }, [glass]);

  const [ingredient, setIngredient] = useState("");
  useEffect(() => {
    if (ingredient !== "") {
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`,
      )
        .then((res) => res.json())
        .then((data) => {
          setCocktail(data.drinks);
          setCocktailCounter(data.drinks.length);
        });
    }
  }, [ingredient]);
  const [category, setCategory] = useState("");
  useEffect(() => {
    if (category !== "") {
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`,
      )
        .then((res) => res.json())
        .then((data) => {
          setCocktail(data.drinks);
          setCocktailCounter(data.drinks.length);
        });
    }
  }, [category]);

  return (
    <>
      <PopularCocktail recipeData={randomCocktail} />
      <nav>
        <div className="filterElement">
          <CocktailButton
            alcool={alcool}
            setAlcool={setAlcool}
            noAlcool={noAlcool}
            setNoAlcool={setNoAlcool}
          />
          <FilterGlasses glass={glass} setGlass={setGlass} />
          <FilterIngredients
            Ingredient={ingredient}
            setIngredient={setIngredient}
          />
          <FilterCategories category={category} setCategory={setCategory} />
          <Input
            setCocktail={setCocktail}
            setCocktailCounter={setCocktailCounter}
            cocktail={cocktailInformation}
            cocktailCounter={cocktailCounter}
          />
        </div>
        <AlphabetList letter={letter} setLetter={setLetter} />
      </nav>
      <div className="cocktailCount">
        <h1>Cocktails</h1>
        <p> {cocktailCounter} Results(s)</p>
      </div>
      <main className="totalCocktail">
        {cocktailInformation === null || cocktailInformation.length === 0 ? (
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

export default PageCocktail; //vrai
