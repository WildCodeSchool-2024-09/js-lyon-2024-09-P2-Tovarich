import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <h1>Smooth Operator</h1>
        <Link to="/">
          <button type="button">Home</button>
        </Link>
      </header>
    </>
  );
}

export default Header;
