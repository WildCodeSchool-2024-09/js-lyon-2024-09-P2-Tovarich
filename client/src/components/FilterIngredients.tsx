import { useEffect, useState } from "react";
import "./FilterGlasses.css";

interface ingredientsResultProps {
  strIngredient1: string;
}

interface ingredientsProps {
  Ingredient: string;
  setIngredient: (strIngredient: string) => void;
}

function FilterIngredients({ setIngredient, Ingredient }: ingredientsProps) {
  const [ingredients, setIngredients] = useState<ingredientsResultProps[]>([]);
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
      .then((res) => res.json())
      .then((data) => setIngredients(data.drinks));
  }, []);

  return (
    <>
      <label>
        <select
          onChange={(e) => setIngredient(e.target.value)}
          value={Ingredient || ""}
        >
          <option value="">Select an ingredient</option>
          {ingredients.map((ingredientsFilter) => (
            <option
              value={ingredientsFilter.strIngredient1}
              key={ingredientsFilter.strIngredient1}
            >
              {ingredientsFilter.strIngredient1}
            </option>
          ))}
        </select>
      </label>
    </>
  );
}

export default FilterIngredients;
