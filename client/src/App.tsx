import "./App.css";
import "./components/Header.css";
import { useEffect, useState } from "react";
import AlphabetList from "./components/AlphabetList";
import Cocktail from "./components/Cocktail";
import DropdownFilter from "./components/DropdownFilter";
import Footer from "./components/Footer";
import Header from "./components/Header";

// const cocktailSample = [
//   {
//     idDrink: 1,
//     strDrink: "Virgin Mojito",
//     strDrinkThumb: "./src/assets/images/Mojito-sans-alcool.jpg",
//   },
//   {
//     idDrink: 2,
//     strDrink: "Virgin Mojito1",
//     strDrinkThumb: "./src/assets/images/Mojito-sans-alcool.jpg",
//   },
//   {
//     idDrink: 3,
//     strDrink: "Virgin Mojito2",
//     strDrinkThumb: "./src/assets/images/Mojito-sans-alcool.jpg",
//   },
//   {
//     idDrink: 4,
//     strDrink: "Virgin Mojito3",
//     strDrinkThumb: "./src/assets/images/Mojito-sans-alcool.jpg",
//   },
// ];

// interface cocktailPros {
//   idDrink: string;
//   strDrink: string;
//   strCategory: string;
//   strAlcoholic: string;
//   strGlass: string;
//   strInstructions: string;
//   strDrinkThumb: string;
//   strIngredient1: string;
//   strIngredient2: string;
//   strIngredient3: string;
//   strIngredient4: string;
//   strIngredient5: string;
//   strIngredient6: string;
//   strIngredient7: string;
//   strIngredient8: string;
//   strIngredient9: string;
//   strIngredient10: string;
//   strIngredient11: string;
//   strIngredient12: string;
//   strIngredient13: string;
//   strIngredient14: string;
//   strIngredient15: string;
//   strMeasure1: string;
//   strMeasure2: string;
//   strMeasure3: string;
//   strMeasure4: string;
//   strMeasure5: string;
//   strMeasure6: string;
//   strMeasure7: string;
//   strMeasure8: string;
//   strMeasure9: string;
//   strMeasure10: string;
//   strMeasure11: string;
//   strMeasure12: string;
//   strMeasure13: string;
//   strMeasure14: string;
//   strMeasure15: string;
//   strImageSource: string;
//   strImageAttribution: string;
// }

function App() {
  const [cocktailInformation, setCockail] = useState([]);
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
      .then((res) => res.json())
      .then((data) => setCockail(data.drinks));
  }, []);

  return (
    <>
      <section className="background">
        <Header />
        <main>
          <nav>
            <AlphabetList />
            <DropdownFilter />
          </nav>
          <div>
            {cocktailInformation.length === 0 ? (
              <p>Loading</p>
            ) : (
              <Cocktail cocktailData={cocktailInformation} />
            )}
          </div>
          <Footer />
        </main>
      </section>
    </>
  );
}

export default App;
