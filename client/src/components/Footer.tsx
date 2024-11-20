import "./Footer.css";
import { useEffect, useState } from "react";
import FunFacts from "../../src/assets/data/FunFacts.json";

function Footer() {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setNumber(Math.floor(Math.random() * FunFacts.length));
    }, 5000);
  }, []);
  return (
    <footer>
      <div className="firstSection">
        <h3>Fun facts</h3>
        <p>{FunFacts[number].Fact}</p>
      </div>
      <div className="secondSection">
        <h1>Smooth Operator</h1>
        <p>
          Projet 02 basé sur l'API https://www.thecocktaildb.com/api.php, vous
          est proposé par le groupe Tovaritch constitué d'Aurore SEGOVIA,
          Théophile SIMOES DAS NEVES, Sébastien FOURNIER et Daniel STACOFFE
        </p>
      </div>
    </footer>
  );
}

export default Footer;
