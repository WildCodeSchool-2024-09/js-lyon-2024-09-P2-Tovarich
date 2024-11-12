import "./App.css";
import AlphabetList from "./components/AlphabetList";
import Cocktail from "./components/Cocktail";
import DropdownFilter from "./components/DropdownFilter";
import Footer from "./components/Footer";
import Title from "./components/Title";

const cocktailSample = [
  {
    name: "Virgin Mojito",
    image: "./src/assets/images/Mojito-sans-alcool.jpg",
  },
];
function App() {
  return (
    <>
      <div className="background">
        <Title />
        <AlphabetList />
        <DropdownFilter />
        <Cocktail cocktailData={cocktailSample} />
        <Footer />
      </div>
    </>
  );
}

export default App;
