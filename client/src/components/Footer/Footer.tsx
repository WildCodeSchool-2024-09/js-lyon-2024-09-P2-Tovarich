import "./Footer.css";
import { useEffect, useState } from "react";
import FunFacts from "../../../src/assets/data/FunFacts.json";

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
          Project 02 using the API https://www.thecocktaildb.com/api.php, is
          created by Aurore SEGOVIA, Théophile SIMOES DAS NEVES, Sébastien
          FOURNIER and Daniel STACOFFE
        </p>
      </div>
    </footer>
  );
}

export default Footer;
