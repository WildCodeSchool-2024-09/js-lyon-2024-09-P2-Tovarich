import { Link } from "react-router-dom";

import iconHome from "../assets/images/icon-home.png";

function Header() {
  return (
    <>
      <header>
        <h1>Smooth Operator</h1>
        <Link to="/">
          <button type="button">
            <img src={iconHome} alt="icon home" />
            Home
          </button>
        </Link>
      </header>
    </>
  );
}

export default Header;
