import { Link } from "react-router-dom";

import iconHome from "../assets/images/icon-home.png";

function Header() {
  return (
    <>
      <header>
        <h1>Smooth Operator</h1>

        <button type="button">
          <img src={iconHome} alt="icon home" />
          <Link to="/">Home</Link>
        </button>
      </header>
    </>
  );
}

export default Header;
