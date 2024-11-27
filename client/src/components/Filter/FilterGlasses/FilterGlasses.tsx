import { useEffect, useState } from "react";

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

  return (
    <>
      <label>
        <select onChange={(e) => setGlass(e.target.value)} value={glass || ""}>
          <option value="">Select a glass</option>
          {glasses.map((glassesFilter) => (
            <option value={glassesFilter.strGlass} key={glassesFilter.strGlass}>
              {glassesFilter.strGlass}
            </option>
          ))}
        </select>
      </label>
    </>
  );
}

export default FilterGlasses;
