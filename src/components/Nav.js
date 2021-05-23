import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/" className="main">
        Store
      </Link>

      <ul className="right">
        <li>
          <Link to="/" className="links">
            Shop
          </Link>
        </li>
        <li>
          <Link to="/cart" className="links">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
