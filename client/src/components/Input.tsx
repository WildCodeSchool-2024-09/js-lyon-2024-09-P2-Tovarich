import { useEffect, useState } from "react";
import "./Input.css";

interface cocktailProps {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

interface setCocktailProps {
  cocktail: cocktailProps[];
  setCocktail: React.Dispatch<React.SetStateAction<cocktailProps[]>>;
  cocktailCounter: number;
  setCocktailCounter: (coktailCounter: number) => void;
}

function Input({ setCocktail, setCocktailCounter }: setCocktailProps) {
  const [listCocktail, setListCocktail] = useState<cocktailProps[]>([]);
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
      .then((res) => res.json())
      .then((data) => {
        setListCocktail(data.drinks);
      });
  }, []);

  const parseInput = (input: string) => {
    const dictionnaire: cocktailProps[] = [];

    listCocktail.map((value) => {
      if (value.strDrink.toLowerCase().includes(input.toLowerCase())) {
        dictionnaire.push(value);
      }
    });
    setCocktail(dictionnaire);
    setCocktailCounter(dictionnaire.length);
  };

  return (
    <>
      <label>
        <input
          name="myInput"
          placeholder="Choisissez un cocktail"
          type="text"
          onChange={(e: { currentTarget: { value: string } }) =>
            parseInput(e.currentTarget.value)
          }
        />
      </label>
      ;
    </>
  );
}

export default Input;
