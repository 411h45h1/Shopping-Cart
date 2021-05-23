import { ADD_TO_CART, REMOVE_FROM_CART } from "./types/cartActionTypes";

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id,
  };
};

export const removeItem = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id,
  };
};
