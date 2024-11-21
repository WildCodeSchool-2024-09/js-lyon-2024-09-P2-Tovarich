import { Link } from "react-router-dom";

import IconHome from "../assets/images/IconHome.png";

function Header() {
  return (
    <>
      <header>
        <h1>Smooth Operator</h1>
        <Link to="/" className="LinkHome">
          <button type="button">
            <img src={IconHome} alt="Icon Home" />
            <p>Home</p>
          </button>
        </Link>
      </header>
    </>
  );
}

export default Header;
