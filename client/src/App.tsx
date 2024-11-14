import "./App.css";
import "./components/Header.css";
import { useEffect, useState } from "react";
import AlphabetList from "./components/AlphabetList";
import Cocktail from "./components/Cocktail";
import DropdownFilter from "./components/DropdownFilter";
import Footer from "./components/Footer";
import Header from "./components/Header";

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
            <div>
              <DropdownFilter />
            </div>
            <div className="alphabetSpace">
              <AlphabetList />
            </div>
          </nav>
          <div className="centered">
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
