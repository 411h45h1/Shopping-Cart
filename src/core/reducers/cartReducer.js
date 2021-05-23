import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../actions/types/cartActionTypes";

const initState = {
  catalog: [
    {
      id: Math.floor(1 + Math.random() * 9000),
      title: "Cat",
      src: "/assets/cat1.webp",
      price: 350,
    },
    {
      id: Math.floor(1 + Math.random() * 9000),
      title: "Dog",
      src: "/assets/dog1.jpeg",
      price: 852,
    },
    {
      id: Math.floor(1 + Math.random() * 9000),
      title: "Cat",
      src: "/assets/cat2.webp",
      price: 350,
    },
    {
      id: Math.floor(1 + Math.random() * 9000),
      title: "Dog",
      src: "/assets/dog2.jpeg",
      price: 950,
    },
    {
      id: Math.floor(1 + Math.random() * 9000),
      title: "cat",
      src: "/assets/cat3.jpeg",
      price: 600,
    },
    {
      id: Math.floor(1 + Math.random() * 9000),
      title: "Dog",
      src: "/assets/dog3.jpeg",
      price: 650,
    },
  ],
  itemsInCart: [],
  total: 0,
};

const cartReducer = (state = initState, action) => {
  if (action.type === ADD_TO_CART) {
    let isolatedItem = state.catalog.find((item) => item.id === action.id);
    let isItemInCart = state.itemsInCart.find((item) => action.id === item.id);

    if (isItemInCart) {
      isolatedItem.quantity += 1;
      return {
        ...state,
        total: state.total + isolatedItem.price,
      };
    } else {
      isolatedItem.quantity = 1;

      return {
        ...state,
        itemsInCart: [...state.itemsInCart, isolatedItem],
        total: state.total + isolatedItem.price,
      };
    }
  }

  if (action.type === REMOVE_FROM_CART) {
    let removeTarget = state.itemsInCart.find((item) => action.id === item.id);
    let cartWithoutTarget = state.itemsInCart.filter(
      (item) => action.id !== item.id
    );
    return {
      ...state,
      itemsInCart: cartWithoutTarget,
      total: state.total - removeTarget.price * removeTarget.quantity,
    };
  } else {
    return state;
  }
};

export default cartReducer;
