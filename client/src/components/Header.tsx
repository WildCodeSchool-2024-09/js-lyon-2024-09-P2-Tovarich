import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <h1>Smooth Operator</h1>

        <button type="button">
          <Link to="/">Home</Link>
        </button>
      </header>
    </>
  );
}

export default Header;
