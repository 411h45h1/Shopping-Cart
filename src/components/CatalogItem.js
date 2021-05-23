import React from "react";
import { connect } from "react-redux";
import { addToCart, removeItem } from "../core/actions/cartActions";

const CatalogItem = (props) => {
  return (
    <div className="catalogItem">
      <img alt="animal" src={props.src} />
      <div className="info">
        <span>
          <h3>{props.title} </h3>
          <h3>${props.price}</h3>
        </span>
        {props.type === "cart" ? (
          <button onClick={() => props.removeItem(props.id)}>
            Remove from cart
          </button>
        ) : (
          <button onClick={() => props.addToCart(props.id)}>Add to cart</button>
        )}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(CatalogItem);
