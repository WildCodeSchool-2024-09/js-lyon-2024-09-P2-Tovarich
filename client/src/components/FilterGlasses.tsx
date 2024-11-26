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
    const array = glass.split(" ");
    const result = array.join("_");
    return result;
  };

  return (
    <>
      <label>
        <select
          onChange={(e) => setGlass(glassSpace(e.target.value))}
          defaultValue="Select a glass"
          value={glass}
        >
          <option value="">
            Select a glass
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
