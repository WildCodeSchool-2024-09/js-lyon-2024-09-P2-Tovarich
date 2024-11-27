import { useEffect, useState } from "react";

interface categoriesProps {
  strCategory: string;
}

interface categoryProps {
  category: string;
  setCategory: (category: string) => void;
}

function FilterCategories({ setCategory }: categoryProps) {
  const [check, setCheck] = useState(false); // initialisation de la checkbox a non
  const handleChange = () => {
    setCheck(!check);
  }; // gestion du changement de l'etat
  const [categories, setCategories] = useState<categoriesProps[]>([]);
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
      .then((res) => res.json())
      .then((data) => setCategories(data.drinks));
  }, []);

  return (
    <>
      <form>
        {categories.map((categoriesFilter) => (
          <label
            htmlFor=""
            onChange={() => setCategory(categoriesFilter.strCategory)}
            key={categoriesFilter.strCategory}
          >
            <input
              className="checkbox"
              checked={check}
              onChange={handleChange}
              type="checkbox"
            />

            {categoriesFilter.strCategory}
          </label>
        ))}
      </form>
    </>
  );
}

export default FilterCategories;
