import React from "react";

const StoreItem = ({ title, src }) => {
  return (
    <div className="storeItem">
      <img alt="cat" src={src} />
      <div className="info">
        <h2>{title} </h2>
        <button>Add to cart</button>
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

export default StoreItem;
