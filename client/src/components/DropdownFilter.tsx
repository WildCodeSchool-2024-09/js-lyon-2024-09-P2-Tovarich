// import { useState } from "react";
import "./dropdownStyle.css";

function DropdownFilter() {
  // const [xxx, setxxx] = useState ([]);
  return (
    <label>
      <select>
        <option value="">Type de cocktail</option>
        <option value="option1">Alcoolisé</option>
        <option value="option2">Non alcoolisé</option>
      </select>
    </label>
  );
}

export default DropdownFilter;