import { useEffect, useState } from "react";
import "./FilterGlasses.css";

interface glassesProps {
  strGlass: string;
}

interface glassProps {
  glass: string;
  setGlass: (glass: string) => void;
}

function FilterGlasses({ setGlass, glass }: glassProps) {
  const [glasses, setGlasses] = useState<glassesProps[]>([]);
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
      .then((res) => res.json())
      .then((data) => setGlasses(data.drinks));
  }, []);

  const glassSpace = (glass: string) => {
    const Yves = glass.split(" "); //Poses pas de questions, y a pas de réponses
    const result = Yves.join("_");
    return result;
  };

  return (
    <>
      <label>
        <select
          onChange={(e) => setGlass(glassSpace(e.target.value))}
          defaultValue="Sélectionnez un verre"
          value={glass}
        >
          <option value="">
            Sélectionnez un verre
            <img
              src="client\src\assets\images\dropdownarrow-removebg-preview.png"
              alt="dropdown arrow"
            />
          </option>
          {glasses.map((glassesFilter) => (
            <option
              value={glassesFilter.strGlass}
              key={glassesFilter.strGlass}
              className=""
            >
              {glassesFilter.strGlass}
            </option>
          ))}
        </select>
      </label>
    </>
  );
}

export default FilterGlasses;
