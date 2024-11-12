import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <h1>Smooth Operator</h1>
        {/* <button type="button" onClick={() => setCurrentLocation("/")}>
          Acceuil
        </button> */}
        <Link to="/">
          <button type="button">Home</button>
        </Link>
      </header>
    </>
  );
}

export default Header;
