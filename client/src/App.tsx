import "./App.css";
import "./components/Header.css";
import AlphabetList from "./components/AlphabetList";
import Cocktail from "./components/Cocktail";
import DropdownFilter from "./components/DropdownFilter";
import Footer from "./components/Footer";
import Header from "./components/Header";

const cocktailSample = [
  {
    name: "Virgin Mojito",
    image: "./src/assets/images/Mojito-sans-alcool.jpg",
  },
  {
    name: "Virgin Mojito1",
    image: "./src/assets/images/Mojito-sans-alcool.jpg",
  },
  {
    name: "Virgin Mojito2",
    image: "./src/assets/images/Mojito-sans-alcool.jpg",
  },
  {
    name: "Virgin Mojito3",
    image: "./src/assets/images/Mojito-sans-alcool.jpg",
  },
];
function App() {
  return (
    <>
      <body>
        <section className="background">
          <Header />
          <main>
            <nav>
              <AlphabetList />
              <DropdownFilter />
            </nav>
            <Cocktail cocktailData={cocktailSample} />
            <Footer />
          </main>
        </section>
      </body>
    </>
  );
}

export default App;
