import "./CocktailButton.css";

interface alcoolProps {
  alcool: boolean;
  setAlcool: (alcool: boolean) => void;
  noAlcool: boolean;
  setNoAlcool: (noAlcool: boolean) => void;
}
function CocktailButton({
  setAlcool,
  setNoAlcool,
  alcool,
  noAlcool,
}: alcoolProps) {
  return (
    <>
      <button
        className="alcoolButton"
        type="button"
        key="alcool"
        onClick={() => setAlcool(!alcool)}
      >
        Alcoholic
      </button>
      <button
        className="alcoolButton"
        type="button"
        key="Non alcool"
        onClick={() => setNoAlcool(!noAlcool)}
      >
        Non Alcoholic
      </button>
    </>
  );
}

export default CocktailButton;
