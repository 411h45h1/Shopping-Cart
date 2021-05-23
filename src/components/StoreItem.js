import React from "react";

const StoreItem = () => {
  const randomNum = Math.floor(1 + Math.random() * 900);
  return (
    <div className="storeItem">
      <img
        alt="cat"
        src={`https://loremflickr.com/320/240/${
          randomNum % 2 === 0 ? "cats" : "dogs"
        }?random=${randomNum}`}
      />
      <div className="info">
        <h2>Cat #{randomNum} </h2>
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
