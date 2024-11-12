import "./dropdownStyle.css";

function DropdownFilter() {
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
