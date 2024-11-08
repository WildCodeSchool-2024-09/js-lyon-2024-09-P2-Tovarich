import "./App.css";
import Cocktail from "./components/Cocktail";
import DropdownFilter from "./components/DropdownFilter";
import Footer from "./components/Footer";
import Liste from "./components/Liste";
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
        <Liste />
        <DropdownFilter />
        <Cocktail cocktailData={cocktailSample} />
        <Footer />
      </div>
    </>
  );
}

export default App;
