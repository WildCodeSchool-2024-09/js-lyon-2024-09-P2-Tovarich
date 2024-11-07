import Cocktail from "./components/Cocktail";
import Liste from "./components/Liste";
import "./App.css";

const cocktailSample = [
  {
    name: "Mojito sans alcool",
    image: "clientsrcassetsimagesMojito-sans-alcool.jpg",
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
