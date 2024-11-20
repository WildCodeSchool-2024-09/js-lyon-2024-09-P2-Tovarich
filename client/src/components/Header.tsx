import { Link } from "react-router-dom";

import iconHome from "../assets/images/IconHome.png";

function Header() {
  return (
    <>
      <header>
        <h1>Smooth Operator</h1>
        <Link to="/" className="LinkHome">
          <button type="button">
            <img src={iconHome} alt="icon home" />
            <p>Home</p>
          </button>
        </Link>
      </header>
    </>
  );
}

export default Header;
