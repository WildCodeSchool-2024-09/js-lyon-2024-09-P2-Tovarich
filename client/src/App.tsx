import Cocktail from "./components/Cocktail";
import Liste from "./components/Liste";
import "./App.css";

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
        <Liste />
        <Cocktail cocktailData={cocktailSample} />
      </div>
    </>
  );
}

export default App;
