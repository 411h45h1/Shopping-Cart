import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav>
      <Link to="/" className="main">
        Pet Store
      </Link>

      <ul className="right">
        <li>
          <Link to="/" className="links">
            Shop
          </Link>
        </li>
        <li>
          <Link to="/cart" className="links">
            Cart {props.cart.length > 0 ? <sup>{props.cart.length}</sup> : null}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.itemsInCart,
  };
};

export default connect(mapStateToProps)(Nav);
