import { useEffect, useState } from "react";

interface categoriesProps {
  strCategory: string;
}

interface categoryProps {
  category: string;
  setCategory: (category: string) => void;
}

function FilterCategories({ setCategory, category }: categoryProps) {
  const [categories, setCategories] = useState<categoriesProps[]>([]);
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
      .then((res) => res.json())
      .then((data) => setCategories(data.drinks));
  }, []);

  return (
    <>
      <label>
        <select
          onChange={(e) => setCategory(e.target.value)}
          defaultValue="Select a category"
          value={category}
        >
          <option value="">Select a category</option>
          {categories.map((categoriesFilter) => (
            <option
              value={categoriesFilter.strCategory}
              key={categoriesFilter.strCategory}
              className=""
            >
              {categoriesFilter.strCategory}
            </option>
          ))}
        </select>
      </label>
    </>
  );
}

export default FilterCategories;
